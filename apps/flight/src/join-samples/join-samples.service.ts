import { DatabaseFlightService } from '@common/database-flight/database-flight.service';
import { Injectable } from '@nestjs/common';
import { Task2Dto } from './dto/task2.dto';
import { Task3Dto } from './dto/task3.dto';
import { PaginationDto } from '@common/dto/pagination.dto';

@Injectable()
export class JoinSamplesService {
  constructor(private readonly databaseService: DatabaseFlightService) {}

  public task2(dto: Task2Dto) {
    return this.databaseService.$queryRaw`
      SELECT *
      FROM airports AS a
      JOIN flights AS f ON a.airport_code = f.departure_airport
      WHERE f.departure_airport = UPPER(${dto.airportCode})
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public task3(dto: Task3Dto) {
    return this.databaseService.$queryRaw`
      SELECT a.airport_name, f.*
      FROM airports AS a
      JOIN flights AS f ON a.airport_code = f.departure_airport
      WHERE f.departure_airport = ${dto.airportCode}
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public task4(dto: PaginationDto) {
    return this.databaseService.$queryRaw`
      SELECT f.*, a.model
      FROM aircrafts AS a
      JOIN flights AS f  ON f.aircraft_code = a.aircraft_code
      WHERE a.model ILIKE '%Airbus%'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public task5(dto: PaginationDto) {
    return this.databaseService.$queryRaw`
      SELECT
        departure_airport.airport_name AS departureAirportName,
        arrival_airport.airport_name AS arrivalAirportName,
        aircrafts.model
      FROM flights
      JOIN airports AS departure_airport ON flights.departure_airport = departure_airport.airport_code
      JOIN airports AS arrival_airport ON flights.arrival_airport = arrival_airport.airport_code
      JOIN aircrafts ON flights.aircraft_code = aircrafts.aircraft_code
      WHERE departure_airport.city <> 'Москва'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public task6(dto: PaginationDto) {
    console.log('huh');
    return this.databaseService.$queryRaw`
      SELECT
        departure_airport.airport_name AS departureAirportName,
        arrival_airport.airport_name AS arrivalAirportName,
        aircrafts.model
      FROM flights
      JOIN airports AS departure_airport ON flights.departure_airport = departure_airport.airport_code
      JOIN airports AS arrival_airport ON flights.arrival_airport = arrival_airport.airport_code
      JOIN aircrafts ON flights.aircraft_code = aircrafts.aircraft_code
      WHERE departure_airport.city <> 'Москва' AND arrival_airport.city <> 'Москва'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public task7(dto: PaginationDto) {
    return this.databaseService.$queryRaw`
      SELECT DISTINCT
        a.model AS aircraft_model
      FROM aircrafts AS a
      JOIN flights AS f ON a.aircraft_code = f.aircraft_code
      JOIN airports ON f.arrival_airport = airports.airport_code
      WHERE airports.city <> 'Анадырь'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }
}
