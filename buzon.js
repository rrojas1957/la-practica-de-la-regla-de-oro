// Función de servidor del buzón anónimo.
// Recibe los mensajes de los visitantes y los guarda en Upstash Redis.
// No registra IP ni cabeceras identificativas.

function credencialesDB() {
  // Prioridad 1: claves REST explícitas de Upstash (las más fiables)
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return { url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN };
  }
  // Prioridad 2: claves KV de Vercel
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    return { url: process.env.KV_REST_API_URL, token: process.env.KV_REST_API_TOKEN };
  }
  // Prioridad 3: derivar desde REDIS_URL (solo funciona si es Upstash)
  const cadena = process.env.REDIS_URL || process.env.KV_URL || "";
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
  if (!cred) throw new Error("Sin credenciales de base de datos");
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
  if (!credencialesDB()) {
    return res.status(500).json({ ok: false, error: "La base de datos del buzón no está configurada" });
  }
  try {
    const cuerpo = req.body || {};
    const texto = typeof cuerpo.message === "string" ? cuerpo.message.trim() : "";
    if (!texto) {
      return res.status(400).json({ ok: false, error: "Mensaje vacío" });
    }
    const registro = JSON.stringify({
      category: typeof cuerpo.category === "string" ? cuerpo.category.slice(0, 60) : "general",
      message: texto.slice(0, 5000),
      timestamp: typeof cuerpo.timestamp === "string" ? cuerpo.timestamp.slice(0, 40) : new Date().toISOString()
    });
    await redis(["LPUSH", "buzon:mensajes", registro]);
    await redis(["LTRIM", "buzon:mensajes", "0", "499"]);
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, error: "No se pudo guardar el mensaje: " + error.message });
  }
}
