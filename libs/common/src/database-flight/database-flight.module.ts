import { Global, Module } from '@nestjs/common';
import { DatabaseFlightService } from './database-flight.service';

@Global()
@Module({
  providers: [DatabaseFlightService],
  exports: [DatabaseFlightService],
})
export class DatabaseFlightModule {}
