import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log('\n🚀 ================================');
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(
    `🌍 Frontend origin: ${process.env.FRONTEND_ORIGIN || 'http://localhost:5173'}`,
  );
  console.log(
    `🔐 JWT Secret: ${process.env.JWT_SECRET ? 'SET ✅ (length: ' + process.env.JWT_SECRET.length + ')' : 'NOT SET ❌'}`,
  );
  console.log(`⏰ JWT Expires: ${process.env.JWT_EXPIRES_IN || '3600'}s`);
  console.log('🚀 ================================\n');
}

bootstrap();
