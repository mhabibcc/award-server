import { Controller, Get, Query } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { query } from 'express';
import { AwardsDto } from './dto/awards.dto';

@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Get()
  findAll(@Query() AwardsDto: AwardsDto) {
    if (AwardsDto.cursor == null) {
      AwardsDto.cursor = 0;
    }
    if (AwardsDto.point == null) {
      AwardsDto.point = 0;
    }
    if (AwardsDto.type == null || AwardsDto.type == '') {
      AwardsDto.type = 'Vouchers,Products,Giftcard';
    }
    return this.awardsService.findAll(AwardsDto);
  }
}
