import { Controller, Get, Query } from '@nestjs/common';
import { SubqueriesService } from './subqueries.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '@common/dto/pagination.dto';

@ApiTags('subqueries')
@Controller('subqueries')
export class SubqueriesController {
  constructor(private readonly subqueriesService: SubqueriesService) {}

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '1. Вывести все имена пассажиров, у которых имя или фамилия длиннее 10 символов.',
  })
  @Get('task1')
  public task1(@Query() query: PaginationDto) {
    return this.subqueriesService.task1(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '2. Выведите имена всех пассажиров с фамилиями, содержащими "sov" и суммарной длиной фамилии и имени более 15 символов.',
  })
  @Get('task2')
  public task2(@Query() query: PaginationDto) {
    return this.subqueriesService.task2(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '3. Выведите имена всех пассажиров с фамилией, которая начинается на согласную и содержит сочетание букв “ch”.',
  })
  @Get('task3')
  public task3(@Query() query: PaginationDto) {
    return this.subqueriesService.task3(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '4. Найти и посчитать количество имен пассажиров, у которых есть тезка (только одинаковое имя).',
  })
  @Get('task4')
  public task4(@Query() query: PaginationDto) {
    return this.subqueriesService.task4(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '5. Вывести отсортированный по имени (по возрастанию) список пассажиров, имеющих в имени две гласные подряд.',
  })
  @Get('task5')
  public task5(@Query() query: PaginationDto) {
    return this.subqueriesService.task5(query);
  }
}
