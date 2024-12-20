import { Controller, Get } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller()
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  getHello(): string {
    return this.flightService.getHello();
  }
}
