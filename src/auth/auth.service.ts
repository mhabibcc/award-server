import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string) {
    const user = await this.userService.findByEmail(email);
    if (user == null) {
      throw new UnauthorizedException();
    }

    const payload = { email: user.email, sub: user.id };

    return {
      ...user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
