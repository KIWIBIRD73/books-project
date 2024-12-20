import { Test, TestingModule } from '@nestjs/testing';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';

describe('FlightController', () => {
  let flightController: FlightController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlightController],
      providers: [FlightService],
    }).compile();

    flightController = app.get<FlightController>(FlightController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(flightController.getHello()).toBe('Hello World!');
    });
  });
});
