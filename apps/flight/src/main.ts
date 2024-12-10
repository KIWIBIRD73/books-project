import { NestFactory } from '@nestjs/core';
import { FlightModule } from './flight.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(FlightModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  logger.log(`Listening on port ${configService.get('FLIGHT_PORT')}`);
  await app.listen(configService.get('FLIGHT_PORT'));
}
bootstrap();
