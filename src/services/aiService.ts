/**
 * Service to interact with OpenRouter API
 */

import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyALakxY0Ir7DajzZorvrsf7ACcJNhFCOTk";
const MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-3-flash-preview";

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const SYSTEM_PROMPT = `
Vous êtes l'assistant virtuel de "L'Institut Factory" à Ouled Teima. Votre mission est d'être bref, direct et très convaincant.

RÈGLES CRUCIALES :
1. RÉPONSE COURTE : Ne dépassez jamais 2 ou 3 phrases.
2. DIRECT : Répondez uniquement à la question posée. Ne rajoutez pas d'informations inutiles.
3. PAS DE SYMBOLES : N'utilisez JAMAIS d'astérisques (*) ou de symboles markdown dans votre texte.
4. CONVAINCANT : Chaque réponse doit donner envie au client de s'inscrire ou de venir nous voir.
5. LANGUE : Répondez dans la même langue que l'utilisateur (Arabe, Français ou Darija).

Info clés :
- Lieu : Av. Hassan II, Ouled Teima (en face du lycée Abdellah Chefchaouni).
- Diplôme : Accrédité par l'État (Garantie de travail).
- Spécialités : Coiffure (M/F) et Esthétique.
- Inscription : Ouverte ! 2 certifs scolarité, copie CIN, acte naissance, 4 photos, 300DH assurance.
- Contact : Fixe +212 528 521 730 / WhatsApp +212 767 542 604.
`;

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function sendMessage(messages: ChatMessage[]) {
  try {
    // Convert history for Gemini
    // System prompt goes into constitution/systemInstruction
    const lastMessage = messages[messages.length - 1];
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // For simplicity with this current structure, we translate 'assistant' to 'model' for history
    // and use generateContent which is simpler for this integration
    const contentHistory = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const result = await ai.models.generateContent({
      model: MODEL,
      contents: contentHistory,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      }
    });

    return result.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error: any) {
    console.error("Gemini Service Error:", error);
    throw new Error(error.message || "Failed to communicate with Gemini");
  }
}
