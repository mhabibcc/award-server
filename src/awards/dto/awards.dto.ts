// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class AwardsDto {
  @ApiProperty({
    default: 0,
    required: false,
  })
  cursor: number;

  @ApiProperty({
    default: 0,
    required: false,
  })
  point: number;

  @ApiProperty({
    required: false,
    default: 'Vouchers,Products,Giftcard',
  })
  type: string;
}
