import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

// Load env vars at module level
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
const JWT_EXPIRES_IN: number = parseInt(
  process.env.JWT_EXPIRES_IN || '3600',
  10,
);

console.log('🔧 [Auth Module] JWT Config:');
console.log('   Secret (first 20):', JWT_SECRET.substring(0, 20) + '...');
console.log('   Secret length:', JWT_SECRET.length);
console.log('   Expires In:', JWT_EXPIRES_IN);

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: JWT_EXPIRES_IN, // number type
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
