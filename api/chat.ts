import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history } = req.body;
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    if (!OPENROUTER_API_KEY) {
      return res.status(500).json({ 
        error: "API Key is missing. Please add OPENROUTER_API_KEY to your Vercel Environment Variables." 
      });
    }

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
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
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
    res.status(200).json({ reply });

  } catch (error: any) {
    console.error("Vercel API Error:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
