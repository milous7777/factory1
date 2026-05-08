import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for the ChatBot
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      
      // Use the API key from environment variables
      const apiKey = process.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY;
      
      if (!apiKey) {
        console.error("GROQ_API_KEY is not set in the environment.");
        return res.status(500).json({ error: "Configuration Error: API Key missing on server." });
      }

      const groq = new Groq({ apiKey });
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `أنت هو المساعد الذكي والمقنع لـ "L'Institut Factory" بمدينة أولاد تايمة. مهمتك هي الإجابة على تساؤلات الزبائن وإقناعهم بالتسجيل في المعهد.

معلومات المعهد الأساسية:
- الإسم: Institut Factory (معهد فاكتوري).
- الموقع: شارع الحسن الثاني، أولاد تايمة (مقابل ثانوية عبد الله الشفشاوني).
- الاعتماد: معهد معتمد من طرف الدولة (Diplôme Accrédité). الدبلوم دياله معترف بيه وطنيا وكيعاون بزاف فالسوق ديال الشغل.

التخصصات المتوفرة:
1. حلاقة الرجال (Coiffure Hommes): كتعلم فيها الحلاقة العصرية، الطراديسيونال، الستايليست، والباربي (Barbier).
2. حلاقة النساء (Coiffure Femmes): كولوريمتري، تسريحات العرائس، وكل ما كيتعلق بجمال المرأة.
3. التجميل (Esthétique & Soins): صوان دو فيزاج، الماكياج الاحترافي، وتقنيات التجميل الحديثة.
4. حلاقة مختلطة (Coiffure Mixte): تكوين شامل للرجل والرأة.

تفاصيل التوقيت (Périodes) والأثمنة:
- التوقيت العادي (Diurne): مدته ما بين 10 إلى 12 شهر (مناسب للي مساليين نهارهم). الثمن: 500 درهم للشهر.
- التوقيت المسائي/المسرع (Nocturne/Accéléré): مدته 6 أشهر فقط (مثالي للناس اللي خدامين أو اللي بغاو يتعلموا بسرعة). الثمن: 800 درهم للشهر.

الامتيازات اللي عندنا:
- تجهيزات عصرية وأدوات احترافية (Équipements de pointe).
- أساتذة خبراء وعندهم تجربة كبيرة فالميدان.
- موقع استراتيجي فقلب المدينة.
- نسبة نجاح عالية ومواكبة للطلبة باش يلقاو خدمة.

ملف التسجيل (Dossier d'inscription):
- 2 شواهد مدرسية أصلية.
- نسخة من بطاقة التعريف الوطنية (CIN).
- عقد الازدياد.
- 4 صور شمسية.
- واجب التسجيل الأساسي: 300 درهم (كتشمل التأمين والوزرة المهنية - Tablier).

قواعد التعامل مع الزبون:
1. اللغة: جاوب بنفس اللغة اللي كيهضر بها الزبون (Darija, Français, English).
2. الأسلوب: خاصك تظهر كإنسان، تكون ودود (Chaleureux) ومحفز. استعمل عبارات بحال "مرحبا بيك"، "تخصص ممتاز"، "مستقبلك مضمون معانا".
3. الإقناع: ركز على أن المعهد معتمد والدبلوم دياله قوي بزاف.
4. التوجيه: ديما شجع الزبون يتواصل معانا فواتساب (+212 767 542 604) أو يجي يزورنا فالمعهد باش يشوف التجهيزات بعينيه.
5. الاختصار المفيد: جاوب على قد السؤال ولكن بأسلوب كايقنع وكايحبب التخصص للزبون.
6. لا تستخدم علامات النجمة (*) أو الرموز الغريبة في ردودك.`
          },
          ...messages
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1000,
      });

      res.json({ content: completion.choices[0]?.message?.content });
    } catch (error: any) {
      console.error("Groq Error:", error.message);
      res.status(500).json({ error: "Erreur lors de la communication avec l'IA." });
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
    // Serve static files in production
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
