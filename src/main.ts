import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Cake Shop - UMG')
  .setDescription('Servicio de Nestjs para el proyecto de pastelería')
  .setVersion('1.0')
  .addTag('main')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('/api/cakeshop');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8300);
}
bootstrap();
