import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Voiture example')
    .setDescription('Voiture API description')
    .setVersion('1.0')
    .addTag('/api')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  const configService = app.get(ConfigService);
  const port = Number(configService.get<string>('PORT') ?? '3000');
  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
}
await bootstrap();
