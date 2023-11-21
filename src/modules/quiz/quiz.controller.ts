import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }
  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateQuizDto) {
    return { data: quizData };
  }
}
