/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../users/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    const secret = process.env.JWT_SECRET || 'dev-secret';

    console.log('🔑 [JWT Strategy] Initialized');
    console.log(
      '🔑 [JWT Strategy] Secret (first 20 chars):',
      secret.substring(0, 20) + '...',
    );
    console.log('🔑 [JWT Strategy] Secret length:', secret.length);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    } as any);
  }

  async validate(payload: any) {
    console.log('\n🔍 [JWT Validate] Called');
    console.log('🔍 [JWT Validate] Payload:', JSON.stringify(payload, null, 2));
    try {
      const userId = payload.sub;
      console.log('🔍 [JWT Validate] Looking for user ID:', userId);
      const user = await this.usersService.findById(userId);
      if (!user) {
        console.error('❌ [JWT Validate] User not found for ID:', userId);
        throw new UnauthorizedException('User not found');
      }

      console.log('✅ [JWT Validate] User found:', {
        id: user.id,
        username: (user as any).username,
        role: (user as any).role,
      });

      const { password, ...rest } = user as any;
      console.log('✅ [JWT Validate] Returning user data\n');
      return rest;
    } catch (error) {
      console.error('❌ [JWT Validate] Error:', error.message);
      console.error('❌ [JWT Validate] Stack:', error.stack);
      throw new UnauthorizedException('Token validation failed');
    }
  }
}
