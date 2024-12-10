import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/generated/client-books';
import { faker } from '@faker-js/faker';

@Injectable()
export class DatabaseBooksService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('DatabaseService');
  async onModuleInit() {
    await this.$connect();

    if (parseInt(process.env.GENERATE_BOOKS_FAKE_DATA)) {
      this.generateMockData();
    }
  }

  private async generateMockData() {
    try {
      // Очистим существующие данные
      await this.bookGenre.deleteMany();
      await this.loan.deleteMany();
      await this.book.deleteMany();
      await this.author.deleteMany();
      await this.reader.deleteMany();
      await this.genre.deleteMany();
      await this.publisher.deleteMany();

      // Генерация Publisher
      const publishers = [];
      for (let i = 0; i < 5; i++) {
        publishers.push(
          await this.publisher.create({
            data: {
              name: faker.company.name(),
              address: faker.address.streetAddress(),
              phone: faker.phone.number(),
            },
          }),
        );
      }

      this.logger.debug('Publishers created.');

      // Генерация Author
      const authors = [];
      for (let i = 0; i < 10; i++) {
        authors.push(
          await this.author.create({
            data: {
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              birthDate: faker.date.past({
                years: 50,
                refDate: new Date('2000-01-01'),
              }),
              country: faker.address.country(),
            },
          }),
        );
      }

      this.logger.debug('Authors created.');

      // Генерация Genre
      const genres = [];
      for (let i = 0; i < 5; i++) {
        genres.push(
          await this.genre.create({
            data: {
              name: faker.music.genre(),
            },
          }),
        );
      }

      this.logger.debug('Genres created.');

      // Генерация Book
      const books = [];
      for (let i = 0; i < 20; i++) {
        const randomAuthor =
          authors[Math.floor(Math.random() * authors.length)];
        const randomPublisher =
          publishers[Math.floor(Math.random() * publishers.length)];
        books.push(
          await this.book.create({
            data: {
              title: faker.lorem.words(3),
              year: faker.date.past({ years: 20 }).getFullYear(),
              authorId: randomAuthor.id,
              publisherId: randomPublisher.id,
            },
          }),
        );
      }

      this.logger.debug('Books created.');

      // Генерация связей BookGenre
      for (const book of books) {
        const selectedGenres = faker.helpers.arrayElements(
          genres,
          faker.number.int({ min: 1, max: 3 }),
        );
        for (const genre of selectedGenres) {
          await this.bookGenre.create({
            data: {
              bookId: book.id,
              genreId: genre.id,
            },
          });
        }
      }

      this.logger.debug('Book-Genre relationships created.');

      // Генерация Reader
      const readers = [];
      for (let i = 0; i < 10; i++) {
        readers.push(
          await this.reader.create({
            data: {
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              address: faker.address.streetAddress(),
              phone: faker.phone.number(),
            },
          }),
        );
      }

      this.logger.debug('Readers created.');

      // Генерация Loan
      for (let i = 0; i < 15; i++) {
        const randomReader =
          readers[Math.floor(Math.random() * readers.length)];
        const randomBook = books[Math.floor(Math.random() * books.length)];
        await this.loan.create({
          data: {
            readerId: randomReader.id,
            bookId: randomBook.id,
            issueDate: faker.date.past({ years: 1 }),
            returnDate: faker.date.future({ years: 1 }),
            status: faker.helpers.arrayElement(['ISSUED', 'NOT_ISSUED']),
          },
        });
      }

      this.logger.debug('Loans created.');

      this.logger.debug('Mock data generation completed.');
    } catch (error) {
      this.logger.error('Error generating mock data:', error);
    } finally {
      await this.$disconnect();
    }
  }
}
