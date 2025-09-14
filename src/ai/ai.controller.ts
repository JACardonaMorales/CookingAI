// src/ai/ai.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai') // <-- Ruta base: /ai
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate-recipe') // <-- Sub-ruta: /generate-recipe (para POST)
  async generateRecipe(@Body('prompt') prompt: string) {
    const recipeIdea = await this.aiService.generateRecipeIdea(prompt);
    return { suggestion: recipeIdea };
  }
}
