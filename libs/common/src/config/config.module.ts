import { Global, Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        BOOKS_PORT: Joi.number().integer().required(),
        FLIGHT_PORT: Joi.number().integer().required(),

        // books database
        POSTGRES_BOOKS_USER: Joi.string().required(),
        POSTGRES_BOOKS_PASSWORD: Joi.string().required(),
        POSTGRES_BOOKS_HOST: Joi.string().required(),
        POSTGRES_BOOKS_PORT: Joi.number().integer().required(),
        POSTGRES_BOOKS_DB: Joi.string().required(),
        BOOKS_DATABASE_URL: Joi.string().required(),
        GENERATE_BOOKS_FAKE_DATA: Joi.number()
          .max(1)
          .min(0)
          .integer()
          .required(),

        // flight database
        POSTGRES_FLIGHT_USER: Joi.string().required(),
        POSTGRES_FLIGHT_PASSWORD: Joi.string().required(),
        POSTGRES_FLIGHT_HOST: Joi.string().required(),
        POSTGRES_FLIGHT_PORT: Joi.number().integer().required(),
        POSTGRES_FLIGHT_DB: Joi.string().required(),
        FLIGHT_DATABASE_URL: Joi.string().required(),
      }),
    }),
  ],
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {}
