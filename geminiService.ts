
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `You are Adare AI, the friendly assistant for Adare Software. 
Adare helps people with:
1. Custom Website Development (We build fast and easy-to-use websites)
2. Maintenance & Hosting (We keep your website safe and working)
3. AI Integration (We use smart tools to make your work easier)

Your job is to help visitors understand what we do. Answer their questions simply and guide them to our Portfolio or Contact page. 
Keep your answers short and easy to read. If someone asks about price, tell them to check our Services page or send us a message.
Always be polite and helpful.`;

export const getProjectConsultation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am having a little trouble connecting. Please send us an email instead!";
  }
};

export const startAdareChat = () => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction,
      temperature: 0.7,
    },
  });
};
