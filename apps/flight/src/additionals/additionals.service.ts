import { DatabaseFlightService } from '@common/database-flight/database-flight.service';
import { PaginationDto } from '@common/dto/pagination.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdditionalsService {
  constructor(private readonly databaseService: DatabaseFlightService) {}

  public async task1() {
    const response = await this.databaseService.$queryRaw`
      SELECT COUNT(DISTINCT passenger_name) AS unique_passenger_names
      FROM tickets;
    `;

    return parseInt(response[0].unique_passenger_names);
  }

  public async task2() {
    const response = await this.databaseService.$queryRaw`
      SELECT COUNT(*) AS passengers_without_email
      FROM tickets
      WHERE contact_data ->> 'email' IS NULL;
    `;

    return parseInt(response[0].passengers_without_email);
  }

  public async task3() {
    const response = await this.databaseService.$queryRaw`
      SELECT COUNT(*) AS passengers_named_artem
      FROM tickets
      WHERE LOWER(passenger_name) ILIKE '%artem%';
    `;

    return parseInt(response[0].passengers_named_artem);
  }

  public async task4(dto: PaginationDto) {
    const response = await this.databaseService.$queryRaw`
      SELECT DISTINCT tickets.passenger_name
      FROM tickets
      JOIN ticket_flights ON tickets.ticket_no = ticket_flights.ticket_no
      JOIN flights ON ticket_flights.flight_id = flights.flight_id
      JOIN airports ON flights.arrival_airport = airports.airport_code
      WHERE airports.city = 'Анадырь'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;

    return response;
  }

  public async task5(dto: PaginationDto) {
    const response = await this.databaseService.$queryRaw`
      SELECT DISTINCT tickets.passenger_name
      FROM tickets
      JOIN ticket_flights ON tickets.ticket_no = ticket_flights.ticket_no
      JOIN flights ON ticket_flights.flight_id = flights.flight_id
      WHERE flights.departure_airport = 'DME'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;

    return response;
  }

  public async task6(dto: PaginationDto) {
    const response = await this.databaseService.$queryRaw`
      SELECT DISTINCT tickets.passenger_name
      FROM tickets
      JOIN ticket_flights ON tickets.ticket_no = ticket_flights.ticket_no
      WHERE LOWER(ticket_flights.fare_conditions) = 'business'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;

    return response;
  }

  public async task7() {
    const response = await this.databaseService.$queryRaw`
      SELECT passenger_name, MAX(ticket_flights.amount) AS max_ticket_price
      FROM tickets
      JOIN ticket_flights ON tickets.ticket_no = ticket_flights.ticket_no
      GROUP BY passenger_name
      ORDER BY max_ticket_price DESC
      LIMIT 1;
    `;

    return response;
  }

  public async task8() {
    // const response = await this.databaseService.$queryRaw`
    //   -- SELECT flights.flight_id, flights.flight_no, COUNT(ticket_flights.ticket_no) AS occupied_seats
    //   -- FROM flights
    //   -- LEFT JOIN ticket_flights ON flights.flight_id = ticket_flights.flight_id
    //   -- GROUP BY flights.flight_id, flights.flight_no
    //   -- ORDER BY occupied_seats ASC
    //   -- LIMIT 1;

    //   SELECT flights.flight_id, flights.flight_no, COUNT(ticket_flights.ticket_no) AS tickerTickerNo
    //   FROM flights
    //   LEFT JOIN ticket_flights ON flights.flight_id = ticket_flights.flight_id
    //   LEFT JOIN seats ON flights.aircraft_code = seats.aircraft_code
    //   WHERE tickerTickerNo > 0
    //   GROUP BY flights.flight_id
    //   ORDER BY tickerTickerNo ASC
    //   LIMIT 10;
    // `;

    const [flightCount, seatsCount] = await this.databaseService.$transaction([
      this.databaseService.flights.count({
        where: {
          ticket_flights: {
            some: {
              amount: {
                gt: 0,
              },
            },
          },
        },
      }),
      this.databaseService.seats.count({}),
    ]);

    return console.log((seatsCount / flightCount) * 100);
    response[0].occupied_seats = parseInt(response[0].occupied_seats);
    return response;
  }
}
