/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    console.log('🛡️  [JWT Guard] canActivate called');
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    console.log('🛡️  [JWT Guard] Authorization header:', authHeader);

    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    console.log('🛡️  [JWT Guard] handleRequest called');
    console.log('🛡️  [JWT Guard] Error:', err);
    console.log('🛡️  [JWT Guard] User:', user);
    console.log('🛡️  [JWT Guard] Info:', info);

    if (err || !user) {
      console.error(
        '❌ [JWT Guard] Authentication failed:',
        info?.message || err?.message,
      );
      throw err || new UnauthorizedException(info?.message || 'Unauthorized');
    }

    console.log('✅ [JWT Guard] Authentication successful');
    return user;
  }
}
