export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function sendMessage(messages: ChatMessage[]) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to communicate with the server");
    }

    const data = await response.json();
    return data.content || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error: any) {
    console.error("Error calling backend API:", error);
    return error.message || "Une erreur est survenue. Veuillez réessayer plus tard.";
  }
}
