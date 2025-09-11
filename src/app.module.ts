
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [RecipesModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}