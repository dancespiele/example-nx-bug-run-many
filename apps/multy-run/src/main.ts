/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AppService } from './app/app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const appService = app.get(AppService);

  if (process.argv[2] === 'secure') {
    appService.getSecureData();
  }

  if (process.argv[2] === 'hello') {
    appService.getData();
  }
}

bootstrap();
