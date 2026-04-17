import type { VercelRequest, VercelResponse } from '@vercel/node';

// CRITICAL: Hardcoding the key here to ensure it works on Vercel without manual env setup
const OPENROUTER_KEY = "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";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history } = req.body;
    
    // Use environment variable if available (for flexibility), otherwise use hardcoded key
    const apiKey = (process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY.length > 30) 
      ? process.env.OPENROUTER_API_KEY 
      : OPENROUTER_KEY;

    const systemInstruction = `
      Tu es l'assistant virtuel de l'Institut Factory de Coiffure et d’Esthétique à Ouled Teima.
      Ton but est d'aider les futurs étudiants, de répondre à leurs questions de manière professionnelle et luxueuse.
      
      Informations clés :
      - Nom : Institut Factory de Coiffure et d’Esthétique.
      - Lieu : Av. Hassan II, Ouled Teima.
      - Spécialités : Coiffure Hommes (Jour/Nuit), Coiffure Femmes (Jour), Esthétique (Jour).
      - Prix : Jour (350-500 DH/mois), Nuit (800 DH/mois).
      - Contact : +212 528 521 730 / WhatsApp : +212 663 376 741.
    `;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://factory1-pied.vercel.app",
        "X-Title": "Institut Factory"
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-super-120b-a12b:free",
        messages: [
          { role: "user", content: `${systemInstruction}\n\nQuestion de l'utilisateur: ${message}` }
        ]
      })
    });

    if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
            errorData = JSON.parse(errorText);
        } catch (e) {
            errorData = { error: { message: errorText } };
        }
        
        const msg = errorData.error?.message || "OpenRouter Error";
        if (msg.includes("User not found")) {
            throw new Error("Clé API invalide ou compte OpenRouter non trouvé. Veuillez vérifier votre compte.");
        }
        throw new Error(msg);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Désolé, je ne peux pas répondre pour le moment.";
    res.status(200).json({ reply });

  } catch (error: any) {
    console.error("Vercel API Error:", error);
    res.status(500).json({ error: error.message || "Erreur lors de la connexion à l'IA" });
  }
}
