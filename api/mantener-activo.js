// api/mantener-activo.js
// Tarea diaria (Vercel Cron, ver vercel.json): escribe un dato mínimo en Upstash Redis
// para que la base de datos del buzón no cuente como inactiva.
// Upstash borra las bases de datos gratuitas tras 14 días sin actividad (incidencia del 12 nov 2026).
// No lee ni modifica los mensajes del buzón (clave "buzon:mensajes").
//
// Seguridad opcional: si existe la variable de entorno CRON_SECRET en Vercel,
// solo se acepta la llamada que Vercel hace con la cabecera "Authorization: Bearer <CRON_SECRET>".

function resolverCredenciales() {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) return { url: url.trim(), token: token.trim() };
  return null;
}

export default async function handler(req, res) {
  const secreto = process.env.CRON_SECRET;
  if (secreto && req.headers.authorization !== `Bearer ${secreto}`) {
    return res.status(401).json({ ok: false, error: "No autorizado" });
  }

  const cred = resolverCredenciales();
  if (!cred) {
    return res.status(500).json({
      ok: false,
      error: "Sin credenciales de base de datos (UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN)"
    });
  }

  const ahora = new Date().toISOString();
  try {
    const respuesta = await fetch(cred.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cred.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(["SET", "buzon:mantener-activo", ahora])
    });
    if (!respuesta.ok) {
      const texto = await respuesta.text();
      throw new Error(`Redis HTTP ${respuesta.status}: ${texto}`);
    }
    return res.status(200).json({ ok: true, ultimaActividad: ahora });
  } catch (error) {
    console.error("[mantener-activo] Error al acceder a Redis:", error.message);
    return res.status(500).json({ ok: false, error: "Error al acceder a la base de datos: " + error.message });
  }
}
