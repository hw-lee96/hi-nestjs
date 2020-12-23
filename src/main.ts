import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,   // true일 때 아무 decorator도 없는 어떠한 property의 object를 거름
    forbidNonWhitelisted:true,    //??
    transform : true    // 데이터를 전달받을 때 원하는 타입으로 자동으로 변환해줌
  }));
  await app.listen(3000);
}
bootstrap();
