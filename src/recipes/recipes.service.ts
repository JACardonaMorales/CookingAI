import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipe } from './interfaces/recipe.interface';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService   {
private readonly recipes: Recipe[] = [];

  create(recipe: CreateRecipeDto): Recipe {
    const newRecipe: Recipe = {
      id: this.recipes.length + 1,
      ...recipe,
    };
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  findAll(): Recipe[] {
    return this.recipes;
  }

  findOne(id: number): Recipe {
    const recipe = this.recipes.find((recipe) => recipe.id === id);

    if (!recipe) {
      // Si no se encuentra la receta, lanza una excepción
      throw new NotFoundException(`Recipe with ID "${id}" not found`);
    }

    return recipe;
  }
}

