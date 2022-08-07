import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(session({
    secret: 'ABljlmdlmkAJPJSJLOOOOLlmmmJJJJ',
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge:60000,
    },
  }),
  )
  await app.listen(3000);
}
bootstrap();
