import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { error } from 'console';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string) {
    if (email == undefined) {
      throw new UnauthorizedException();
    }
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
