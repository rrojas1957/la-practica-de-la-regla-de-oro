// Zona privada del buzón (solo coordinación).
// Valida la contraseña definida en BUZON_PASSWORD y devuelve o vacía los mensajes.

async function getUpstashClient() {
  // Intento 1: claves REST explícitas (KV_* o UPSTASH_*)
  let url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  let token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  // Intento 2: derivar desde REDIS_URL / KV_URL
  if (!url || !token) {
    const cadena = process.env.REDIS_URL || process.env.KV_URL || "";
    if (cadena) {
      try {
        const u = new URL(cadena);
        // Upstash REST endpoint: https://<host>
        url = "https://" + u.hostname;
        // El token es la contraseña del string de conexión
        token = decodeURIComponent(u.password || "");
      } catch (e) { /* cadena no válida */ }
    }
  }

  if (!url || !token) return null;
  return { url, token };
}

async function redis(cred, comando) {
  const respuesta = await fetch(cred.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cred.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(comando)
  });
  if (!respuesta.ok) {
    const texto = await respuesta.text();
    throw new Error(`Redis HTTP ${respuesta.status}: ${texto}`);
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

  const cuerpo = req.body || {};
  if (typeof cuerpo.password !== "string" || cuerpo.password !== clave) {
    await new Promise((r) => setTimeout(r, 900));
    return res.status(401).json({ ok: false, error: "Contraseña incorrecta" });
  }

  const cred = await getUpstashClient();
  if (!cred) {
    return res.status(500).json({
      ok: false,
      error: "La base de datos del buzón no está configurada (REDIS_URL no encontrada o inválida)"
    });
  }

  try {
    if (cuerpo.accion === "vaciar") {
      await redis(cred, ["DEL", "buzon:mensajes"]);
      return res.status(200).json({ ok: true, mensajes: [] });
    }
    const lista = (await redis(cred, ["LRANGE", "buzon:mensajes", "0", "-1"])) || [];
    const mensajes = lista.map((elemento) => {
      try { return JSON.parse(elemento); }
      catch (e) { return { message: String(elemento) }; }
    });
    return res.status(200).json({ ok: true, mensajes });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: "Error al acceder a la base de datos: " + error.message
    });
  }
}
