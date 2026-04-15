import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;

export const geminiService = {
  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    if (!API_KEY) {
      throw new Error("Clé API Gemini non configurée.");
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
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

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
    });

    return response.text;
  }
};
