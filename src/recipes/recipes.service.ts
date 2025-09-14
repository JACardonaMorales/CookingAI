import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  // Inyecta el repositorio de la entidad Recipe
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find();
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOneBy({ id });
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return recipe;
  }

  create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const newRecipe = this.recipesRepository.create(createRecipeDto);
    return this.recipesRepository.save(newRecipe);
  }
}