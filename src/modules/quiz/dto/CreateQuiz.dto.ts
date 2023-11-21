import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Quiz should have a title' })
  @Length(10, 300)
  title: string;

  @IsNotEmpty({ message: 'Quiz should have a description' })
  @Length(10, 300)
  description: string;
}
