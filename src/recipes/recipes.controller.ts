// src/recipes/recipes.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './interfaces/recipe.interface';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recipe> {
    return this.recipesService.findOne(+id);
  }
}