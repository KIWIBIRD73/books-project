import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { ConfigModule } from '@common/config/config.module';
import { JoinSamplesModule } from './join-samples/join-samples.module';
import { DatabaseFlightModule } from '@common/database-flight/database-flight.module';
import { AdditionalsModule } from './additionals/additionals.module';
import { SubqueriesModule } from './subqueries/subqueries.module';

@Module({
  imports: [ConfigModule, JoinSamplesModule, DatabaseFlightModule, AdditionalsModule, SubqueriesModule],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
