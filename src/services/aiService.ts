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
        let errorMessage = "Erreur serveur";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          // Fallback to text if json fails
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data.reply;
    } catch (error: any) {
      console.error("AI Service Error:", error);
      throw error;
    }
  }
};
