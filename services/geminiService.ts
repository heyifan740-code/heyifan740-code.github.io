import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables. Chat feature will be disabled.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (userMessage: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "I'm sorry, the AI service is currently unavailable (Missing API Key). Please contact Yifan directly via email.";
  }

  try {
    const model = client.models;
    
    // We send a single generateContent request with the context. 
    // For a simple portfolio bot, we treat it as a fresh query with context each time or build a simple history string.
    // To keep it robust, we will construct the prompt with system instructions.
    
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
      contents: [
        ...history.map(msg => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: msg.parts
        })),
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ]
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI. Please try again later.";
  }
};