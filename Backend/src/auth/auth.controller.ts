/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    console.log('🔐 [Login] Request received for:', dto.emailOrUsername);
    const result = await this.authService.login(dto);
    console.log('🔐 [Login] Token generated successfully');
    return result;
  }

  // Endpoint untuk test - tanpa guard
  @Get('test')
  async test(@Headers('authorization') auth: string) {
    console.log('🧪 [Test] Authorization header:', auth);
    return {
      message: 'Test endpoint works',
      hasAuth: !!auth,
      authValue: auth,
    };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@Req() req, @Headers('authorization') auth: string) {
    console.log('👤 [Me] Endpoint called - INSIDE controller');
    console.log('👤 [Me] Authorization header:', auth);
    console.log('👤 [Me] User from request:', req.user);
    return req.user;
  }
}
