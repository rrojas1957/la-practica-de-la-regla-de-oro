// api/buzon-admin.js
// Endpoint protegido: permite a la coordinación consultar y vaciar el buzón anónimo.
// Autenticación por contraseña definida en la variable de entorno BUZON_PASSWORD.

function resolverCredenciales() {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) return { url: url.trim(), token: token.trim() };
  return null;
}

async function redisCmd(comando) {
  const cred = resolverCredenciales();
  if (!cred) throw new Error("Sin credenciales de base de datos (UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN)");
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

  if (!resolverCredenciales()) {
    return res.status(500).json({
      ok: false,
      error: "La base de datos del buzón no está configurada (falta UPSTASH_REDIS_REST_URL o UPSTASH_REDIS_REST_TOKEN)"
    });
  }

  try {
    if (cuerpo.accion === "vaciar") {
      await redisCmd(["DEL", "buzon:mensajes"]);
      return res.status(200).json({ ok: true, mensajes: [] });
    }
    const lista = (await redisCmd(["LRANGE", "buzon:mensajes", "0", "-1"])) || [];
    const mensajes = lista.map((elemento) => {
      try { return JSON.parse(elemento); }
      catch (e) { return { message: String(elemento) }; }
    });
    return res.status(200).json({ ok: true, mensajes });
  } catch (error) {
    console.error("[buzon-admin] Error al acceder a Redis:", error.message);
    return res.status(500).json({
      ok: false,
      error: "Error al acceder a la base de datos: " + error.message
    });
  }
}
