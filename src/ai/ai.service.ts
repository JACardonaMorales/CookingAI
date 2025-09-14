import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AiService {
  private readonly genAI: GoogleGenerativeAI;
  
  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    
    // 1. Verificamos si la clave existe
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not defined in the .env file');
    }

    // 2. Si existe, la usamos para inicializar el cliente
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateRecipeIdea(prompt: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      
      const fullPrompt = `Generate a simple recipe for a dish based on the following idea: "${prompt}". Include a title, a short description, a list of ingredients, and the preparation steps.`;
      
      const result = await model.generateContent(fullPrompt);
      const response = await result.response;
      
      return response.text();
    } catch (error) {
      console.error('Error with Google AI API:', error);
      throw new Error('Failed to generate recipe from AI service.');
    }
  }
}