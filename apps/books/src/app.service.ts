import { Injectable } from '@nestjs/common';
import { DatabaseBooksService } from 'libs/common/src/database-books/database-books.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseBooksService) {}

  getHello(): string {
    return 'Hello World!';
  }

  /**
   * 1. Найдите имена и фамилии всех авторов, родившихся до 1980 года,
   * чьи имена начинаются с буквы "А".
   */
  public getTask1Data() {
    return this.databaseService.$queryRaw`
      SELECT "firstName", "lastName"
      FROM "Author"
      WHERE "birthDate" < '1980-01-01' AND UPPER("firstName") LIKE 'G%';
    `;
  }

  /**
   * 2. Выведите название книги, имя и фамилию автора и название издательства для всех книг,
   * изданных после 2010 года. Результаты должны быть отсортированы по названию книги.
   */
  public getTask2Data() {
    return this.databaseService.$queryRaw`
      SELECT 
        "Book"."title" AS "bookTitle",
        "Author"."firstName" AS "authorFirstName",
        "Author"."lastName" AS "authorLastName",
        "Publisher"."name" AS "publisherName"
      FROM "Book"
      JOIN "Author" ON "Book"."authorId" = "Author"."id"
      JOIN "Publisher" ON "Book"."publisherId" = "Publisher"."id"
      WHERE "Book"."year" > 2010
      ORDER BY "Book"."title";
    `;
  }

  /**
   * 3. Составьте отчёт, показывающий для каждого жанра количество выданных книг и
   * количество уникальных авторов, написавших книги этого жанра. Учитывайте только книги,
   * которые сейчас находятся на руках у читателей. Отсортируйте результаты по количеству
   * выданных книг в убывающем порядке.
   */
  public async getTask3Data() {
    const response = await this.databaseService.$queryRaw<any>`
      SELECT 
        "Genre"."name" AS "genreName",
        COUNT("Loan"."bookId") AS "issuedBooksCount",
        COUNT("Book"."authorId") AS "uniqueAuthorsCount"
      FROM "Genre"
      JOIN "BookGenre" ON "Genre"."id" = "BookGenre"."genreId"
      JOIN "Book" ON "BookGenre"."bookId" = "Book"."id"
      JOIN "Loan" ON "Book"."id" = "Loan"."bookId"
      WHERE "Loan"."status" = 'ISSUED'
      GROUP BY "Genre"."name"
      ORDER BY "issuedBooksCount" DESC;
    `;

    for (const book of response) {
      book.uniqueAuthorsCount = parseInt(book.uniqueAuthorsCount);
      book.issuedBooksCount = parseInt(book.issuedBooksCount);
    }

    return response;
  }

  /**
   * 4. Найдите книги, которые были выданы более 10 раз в течение 2022 года.
   * Выведите название книги, имя автора, название издательства, количество
   * выдачи и среднюю продолжительность выдачи (разница между issueDate и returnDate).
   */
  public async getTask4Data() {
    const result = await this.databaseService.$queryRaw<any>`
      SELECT 
        "Book"."title" AS "bookTitle",
        "Author"."firstName" AS "authorFirstName",
        "Author"."lastName" AS "authorLastName",
        "Publisher"."name" AS "publisherName",
        COUNT("Loan"."id") AS "loanCount",
        FLOOR(AVG(EXTRACT(EPOCH FROM ("Loan"."returnDate" - "Loan"."issueDate")) / (24 * 60 * 60))) AS "averageLoanDurationDays"
      FROM "Loan"
      JOIN "Book" ON "Loan"."bookId" = "Book"."id"
      JOIN "Author" ON "Book"."authorId" = "Author"."id"
      JOIN "Publisher" ON "Book"."publisherId" = "Publisher"."id"
      WHERE 
        "Loan"."issueDate" >= '2024-01-01' AND "Loan"."returnDate" < '2026-01-01'
      GROUP BY "Book"."id", "Author"."id", "Publisher"."id"
      HAVING COUNT("Loan"."id") > 0
      ORDER BY "loanCount" DESC;
    `;

    for (const book of result) {
      book.loanCount = parseInt(book.loanCount);
    }

    return result;
  }
}
