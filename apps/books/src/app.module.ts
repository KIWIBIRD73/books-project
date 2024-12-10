import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@common/config/config.module';
import { DatabaseBooksModule } from '@common/database-books/database-books.module';

@Module({
  imports: [DatabaseBooksModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
