import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    error(email);
    return this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  }
}
