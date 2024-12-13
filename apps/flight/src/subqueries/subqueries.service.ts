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
      WHERE SPLIT_PART(passenger_name, ' ', 2) ~* '^[^aeiou(ch)].*ch'
      LIMIT ${dto.limit} OFFSET ${dto.page};
    `;
  }

  public async task4(dto: PaginationDto) {
    const response = await this.databaseService.$queryRaw<any[]>`
      SELECT COUNT(*)
      FROM (
        SELECT DISTINCT SPLIT_PART(passenger_name, ' ', 1), COUNT(*) AS count
        FROM tickets
        GROUP BY SPLIT_PART(passenger_name, ' ', 1)
        HAVING COUNT(*) > 1
      ) AS SUBQUERY
    `;

    return parseInt(response[0].count);
  }

  public async task5(dto: PaginationDto) {
    const response = await this.databaseService.$queryRaw<any[]>`
      SELECT COUNT(*)
      FROM (
        SELECT passenger_name
        FROM tickets
        WHERE passenger_name ~* '[aeiou]{2}'
        ORDER BY SPLIT_PART(passenger_name, ' ', 1) ASC
      ) as HUH;
    `;

    return parseInt(response[0].count);
  }
}
