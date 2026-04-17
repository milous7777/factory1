export const aiService = {
  async chat(message: string, history: any[]) {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, history }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la communication avec le serveur.");
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("AI Service Error:", error);
      throw error;
    }
  }
};
