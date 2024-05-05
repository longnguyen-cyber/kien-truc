/* eslint-disable prettier/prettier */
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common'
import * as redisStore from 'cache-manager-redis-store'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
// import { ThreadController } from './thread/thread.controller'
import { UserController } from './user/user.controller'
import { UserModule } from './user/user.module'

import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer'
import { BullModule } from '@nestjs/bull'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { ScheduleModule } from '@nestjs/schedule'
import { join } from 'path'
import { CommonService } from './common/common.service'
import { Valid } from './utils/validUser'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EnrollmentModule } from './enrollment/enrollment.module'
import { SubjectModule } from './subject/subject.module'
import { AppController } from './app.controller'
import { ClassModule } from './class/class.module'
import { GradeModule } from './grade/grade.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UserModule,
    PrismaModule,
    EnrollmentModule,
    ClassModule,
    GradeModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        // transport: config.get('MAIL_TRANSPORT'),
        transport: {
          tls: {
            rejectUnauthorized: false,
          },
          host: config.get('MAIL_HOST'),
          secure: false,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },

        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, 'src/templates/email'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        isGlobal: true,
        store: redisStore,
        host: configService.get<string>('REDIS_HOST'),

        port: configService.get<number>('REDIS_PORT'),
        username: configService.get<string>('REDIS_USERNAME'),
        password: configService.get<string>('REDIS_PASSWORD'),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),

    BullModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: async (config: ConfigService) => ({
        redis: {
          host: config.get('REDIS_HOST'),
          port: config.get('REDIS_PORT'),
          password: config.get('REDIS_PASSWORD'),
        },
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ScheduleModule.forRoot(),
    SubjectModule,
  ],
  providers: [
    CommonService,
    {
      provide: 'VALID',
      useClass: Valid,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  controllers: [UserController, AppController],
})
export class AppModule {}
