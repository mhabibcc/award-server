// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}
