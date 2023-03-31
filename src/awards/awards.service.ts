import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AwardsDto } from './dto/awards.dto';

@Injectable()
export class AwardsService {
  constructor(private prisma: PrismaService) {}

  findAll(awardsDto: AwardsDto) {
    const types = awardsDto.type.split(',');
    return this.prisma.awards.findMany({
      take: 5,
      cursor: {
        id: Number(awardsDto.cursor) + 1,
      },
      where: {
        pointExchange: {
          gte: Number(awardsDto.point),
        },
        awardType: {
          in: [...types],
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  }
}
