import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// 1. Safe initialization of GoogleGenAI with Environment Variable and telemetry User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

type SupportedLanguages = "es" | "en" | "fr" | "de" | "pt";

interface TranslationRequestBody {
  text: string;
  targetLang: SupportedLanguages;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parser is mandatory for receiving req.body
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Translation route requested by user
  app.post("/api/translate", async (req: Request, res: Response): Promise<void> => {
    try {
      const { text, targetLang } = req.body as TranslationRequestBody;

      // Validation
      if (!text || typeof text !== "string" || text.trim() === "") {
        res.status(400).json({ error: "El texto a traducir es requerido y debe ser una cadena válida." });
        return;
      }

      const validLanguages: SupportedLanguages[] = ["es", "en", "fr", "de", "pt"];
      if (!validLanguages.includes(targetLang)) {
        res.status(400).json({ error: `Idioma destino no soportado. Opciones válidas: ${validLanguages.join(", ")}` });
        return;
      }

      // Basic sanitization to neutralize potential XSS in dynamic text
      const sanitizedText = text
        .replace(/<script[^>]*>([\S\s]*?)<\/script>/gi, "") // Removes script tags
        .replace(/on\w+="[^"]*"/gi, ""); // Removes inline event handlers

      // Model call with strict system instructions
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `[Idioma_Destino]: ${targetLang}\n[Texto_A_Traducir]: ${sanitizedText}`,
        config: {
          systemInstruction: `Eres un microservicio API de traducción en tiempo real de baja latencia incorporado en la aplicación "La Práctica de la Regla de Oro".
Tu única tarea es traducir el texto dinámico que introduce el usuario al idioma destino especificado, manteniendo el formato original (HTML, Markdown o texto plano).

RESTRICCIONES CRÍTICAS:
1. No saludes, no expliques la traducción y no respondas al usuario bajo ningún concepto. Tu salida debe ser ÚNICAMENTE el string con el texto traducido limpio.
2. Conserva intactos los nombres propios, variables entre corchetes (ej: {user}) y emojis.
3. Si el idioma destino es 'de' (Alemán), utiliza obligatoriamente conjugaciones formales de respeto ("Sie").
4. Si el idioma destino es 'pt' (Portugués), utiliza un estándar neutro internacional aplicable tanto a Brasil como a Portugal.`,
          temperature: 0.0, // Ensures maximum accuracy and linguistic determinism
        },
      });

      const translatedText = response.text?.trim();

      if (!translatedText) {
        throw new Error("La API de Google devolvió una respuesta vacía.");
      }

      res.status(200).json({ translatedText });
    } catch (error) {
      console.error("Error crítico en el endpoint de traducción:", error);
      res.status(500).json({ error: "Error interno del servidor al procesar la traducción automática." });
    }
  });

  // Vite middleware for development vs static asset serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
