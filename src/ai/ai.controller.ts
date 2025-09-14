import { Controller, Post, Body, Param } from '@nestjs/common';
import { AiService } from './ai.service';
import { UsersService } from 'src/users/users.service';

@Controller('ai')
export class AiController {
  constructor(
    private readonly aiService: AiService,
    private readonly usersService: UsersService,
  ) {}

  @Post('generate-recipe')
  async generateRecipe(@Body('prompt') prompt: string) {
    const recipeIdea = await this.aiService.generateRecipeIdea(prompt);
    return { suggestion: recipeIdea };
  }

  // ✅ MÉTODO CORREGIDO
  @Post('recommend-for-user/:userId')
  async getPersonalizedRecommendation(
    @Param('userId') userId: string,
    @Body('prompt') prompt: string,
  ) {
    const user = await this.usersService.findOneById(+userId);
    const userPreferences = user.preferences || [];

    const suggestion = await this.aiService.generateRecipeIdea(
      prompt,
      userPreferences,
    );
    return { suggestion };
  }
}