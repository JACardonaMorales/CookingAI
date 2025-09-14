import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module'; 

@Module({
  imports: [RecipesModule, UsersModule], 
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}