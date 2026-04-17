import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Chat Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const OPENROUTER_API_KEY = "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";

      const systemInstruction = `
        Tu es l'assistant virtuel de l'Institut Factory de Coiffure et d’Esthétique à Ouled Teima.
        Ton but est d'aider les futurs étudiants, de répondre à leurs questions de manière professionnelle et luxueuse, et de les encourager à s'inscrire.
        
        Informations clés :
        - Nom : Institut Factory de Coiffure et d’Esthétique.
        - Lieu : Av. Hassan II, Ouled Teima (en face du lycée Abdellah Chefchaouni).
        - Spécialités : Coiffure Hommes, Coiffure Femmes, Esthétique.
        - Diplôme : Diplôme de Spécialisation Professionnelle accrédité par l'État Marocain.
        - Horaires de jour : 10 mois (400 DH/mois) ou 12 mois (350 DH/mois).
        - Horaires de nuit : 6 mois (800 DH/mois), de 19h00 à 21h30.
        - Frais d'inscription : 300 DH (Assurance + Tablier).
        - Documents requis : 2 certificats de scolarité originaux, 1 copie de la CIN, acte de naissance, 4 photos.
        - Contact : +212 528 521 730.
        
        Ton ton doit être : Élégant, Persuasif, Accueillant, Professionnel.
        Réponds toujours en français.
        Si l'utilisateur semble intéressé par une inscription, suggère-lui de remplir le formulaire sur le site ou de nous contacter sur WhatsApp (+212 663 376 741).
      `;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://ais-dev.run.app", // Optional
          "X-Title": "Institut Factory Chatbot", // Optional
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-3-super-120b-a12b:free",
          messages: [
            { role: "system", content: systemInstruction },
            ...history.map((m: any) => ({
              role: m.role === 'model' ? 'assistant' : 'user',
              content: m.parts[0].text
            })),
            { role: "user", content: message }
          ]
        })
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message || "OpenRouter Error");
      }

      const reply = data.choices?.[0]?.message?.content || "Désolé, je ne peux pas répondre pour le moment.";
      
      res.json({ reply });
    } catch (error: any) {
      console.error("OpenRouter Error:", error);
      res.status(500).json({ error: error.message || "Server Error" });
    }
  });

  // Vite middleware for development
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
