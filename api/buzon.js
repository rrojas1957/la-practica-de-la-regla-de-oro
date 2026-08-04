// api/buzon.js
// Endpoint público: recibe mensajes anónimos y los guarda en Upstash Redis.
// No registra IP, cookies ni datos identificativos.

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
  if (!resolverCredenciales()) {
    return res.status(500).json({ ok: false, error: "La base de datos del buzón no está configurada (falta UPSTASH_REDIS_REST_URL o UPSTASH_REDIS_REST_TOKEN)" });
  }
  try {
    const cuerpo  = req.body || {};
    const texto   = typeof cuerpo.message === "string" ? cuerpo.message.trim() : "";
    if (!texto) {
      return res.status(400).json({ ok: false, error: "Mensaje vacío" });
    }
    const registro = JSON.stringify({
      category  : typeof cuerpo.category === "string" ? cuerpo.category.slice(0, 60) : "general",
      message   : texto.slice(0, 5000),
      timestamp : typeof cuerpo.timestamp === "string" ? cuerpo.timestamp.slice(0, 40) : new Date().toISOString()
    });
    await redisCmd(["LPUSH", "buzon:mensajes", registro]);
    await redisCmd(["LTRIM", "buzon:mensajes", "0", "499"]);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[buzon] Error al guardar:", error.message);
    return res.status(500).json({ ok: false, error: "No se pudo guardar el mensaje: " + error.message });
  }
}
