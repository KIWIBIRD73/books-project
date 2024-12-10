import { Global, Module } from '@nestjs/common';
import { DatabaseBooksService } from './database-books.service';

@Global()
@Module({
  providers: [DatabaseBooksService],
  exports: [DatabaseBooksService],
})
export class DatabaseBooksModule {}
