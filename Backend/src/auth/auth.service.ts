import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const byEmail = await this.usersService.findByEmail(dto.email);
    if (byEmail) throw new BadRequestException('Email already in use');

    const byUsername = await this.usersService.findByUsername(dto.username);
    if (byUsername) throw new BadRequestException('Username already in use');

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create({
      username: dto.username,
      email: dto.email,
      password: hashed,
      role: dto.role,
    });

    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(emailOrUsername: string, password: string) {
    const user =
      (await this.usersService.findByEmail(emailOrUsername)) ||
      (await this.usersService.findByUsername(emailOrUsername));
    if (!user) return null;
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) return null;
    return user;
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto.emailOrUsername, dto.password);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      access_token: this.jwtService.sign(payload),
    };
  }
}
