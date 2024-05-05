import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
async function bootstrap() {
  //use file env.dev

  const APP_PORT = process.env.APP_PORT
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: '*',
    },
  })

  // app.

  app.setGlobalPrefix('api')
  app.set('trust proxy', true)
  app.use(cookieParser())
  const config = new DocumentBuilder()
    .setTitle('architecture api example')
    .setDescription('The architecture API description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.enableCors({
    origin: '*',
    methods: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  })

  await app.listen(APP_PORT, () =>
    console.log(`===>>>>🚀  Server is running on port ${APP_PORT}`),
  )
}

bootstrap()
