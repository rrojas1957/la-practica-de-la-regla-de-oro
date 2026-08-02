// Zona privada del buzón (solo coordinación).
// Valida la contraseña definida en la variable de entorno BUZON_PASSWORD de Vercel
// y, si es correcta, devuelve los mensajes guardados o vacía el buzón.

// Credenciales de la base de datos. Soporta las tres formas en que Vercel
// puede inyectarlas: claves REST (KV_* o UPSTASH_*) o la cadena REDIS_URL,
// de la que se derivan el punto de acceso REST y el token.
function credencialesDB() {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    return { url: process.env.KV_REST_API_URL, token: process.env.KV_REST_API_TOKEN };
  }
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return { url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN };
  }
  const cadena = process.env.REDIS_URL || process.env.KV_URL;
  if (cadena) {
    try {
      const u = new URL(cadena);
      if (u.hostname && u.password) {
        return { url: "https://" + u.hostname, token: decodeURIComponent(u.password) };
      }
    } catch (e) { /* cadena no válida */ }
  }
  return null;
}

async function redis(comando) {
  const cred = credencialesDB();
  const respuesta = await fetch(cred.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cred.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comando)
  });
  if (!respuesta.ok) {
    throw new Error("Error de base de datos: " + respuesta.status);
  }
  const datos = await respuesta.json();
  return datos.result;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }
  const clave = process.env.BUZON_PASSWORD;
  if (!clave) {
    return res.status(500).json({
      ok: false,
      error: "Falta configurar la contraseña (variable BUZON_PASSWORD en Vercel)"
    });
  }
  if (!credencialesDB()) {
    return res
      .status(500)
      .json({ ok: false, error: "La base de datos del buzón no está configurada" });
  }
  const cuerpo = req.body || {};
  if (typeof cuerpo.password !== "string" || cuerpo.password !== clave) {
    // Pequeña espera para desalentar intentos de adivinación
    await new Promise((resolver) => setTimeout(resolver, 900));
    return res.status(401).json({ ok: false, error: "Contraseña incorrecta" });
  }
  try {
    if (cuerpo.accion === "vaciar") {
      await redis(["DEL", "buzon:mensajes"]);
      return res.status(200).json({ ok: true, mensajes: [] });
    }
    const lista = (await redis(["LRANGE", "buzon:mensajes", "0", "-1"])) || [];
    const mensajes = lista.map((elemento) => {
      try {
        return JSON.parse(elemento);
      } catch (e) {
        return { message: String(elemento) };
      }
    });
    return res.status(200).json({ ok: true, mensajes });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, error: "No se pudo acceder al buzón" });
  }
}
