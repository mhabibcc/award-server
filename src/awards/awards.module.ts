import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AwardsController],
  providers: [AwardsService],
  imports: [PrismaModule],
})
export class AwardsModule {}
