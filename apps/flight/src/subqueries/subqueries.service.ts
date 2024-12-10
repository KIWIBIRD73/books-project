import { DatabaseFlightService } from '@common/database-flight/database-flight.service';
import { PaginationDto } from '@common/dto/pagination.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubqueriesService {
  constructor(private readonly databaseService: DatabaseFlightService) {}

  public task1(dto: PaginationDto) {
    return this.databaseService.$queryRaw`
      SELECT passenger_name
      FROM tickets
      WHERE LENGTH(SPLIT_PART(passenger_name, ' ', 1)) > 10
        OR LENGTH(SPLIT_PART(passenger_name, ' ', 2)) > 10
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public task2(dto: PaginationDto) {
    return this.databaseService.$queryRaw`
      SELECT passenger_name
      FROM tickets
      WHERE (LENGTH(SPLIT_PART(passenger_name, ' ', 1)) + LENGTH(SPLIT_PART(passenger_name, ' ', 2))) > 15
        AND SPLIT_PART(passenger_name, ' ', 2) ILIKE '%sov%'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public task3(dto: PaginationDto) {
    return this.databaseService.$queryRaw`
      SELECT passenger_name
      FROM tickets
      WHERE LOWER(SPLIT_PART(passenger_name, ' ', 2)) ~ '^[^aeiou].*ch'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public async task4(dto: PaginationDto) {
    const response = await this.databaseService.$queryRaw<any[]>`
      SELECT passenger_name, COUNT(*) AS count
      FROM tickets
      GROUP BY passenger_name
      HAVING COUNT(*) > 1
      ORDER BY count DESC
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;

    for (const passenger of response) {
      passenger.count = parseInt(passenger.count);
    }

    return response;
  }

  public task5(dto: PaginationDto) {
    return this.databaseService.$queryRaw<any[]>`
      SELECT passenger_name
      FROM tickets
      WHERE passenger_name ~ '[aeiouAEIOU]{2}'
      ORDER BY passenger_name ASC
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }
}
