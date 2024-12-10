import { Controller, Get, Query } from '@nestjs/common';
import { JoinSamplesService } from './join-samples.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Task2Dto } from './dto/task2.dto';
import { Task3Dto } from './dto/task3.dto';
import { PaginationDto } from '@common/dto/pagination.dto';

@ApiTags('join-samples')
@Controller('join-samples')
export class JoinSamplesController {
  constructor(private readonly joinSamplesService: JoinSamplesService) {}

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiQuery({ name: 'airportCode', type: 'string' })
  @ApiOperation({
    description:
      '2.	Вывести все данные аэропортов отправления совместно с таблицей рейсов.',
  })
  @Get('task-2')
  public task2(@Query() query: Task2Dto) {
    return this.joinSamplesService.task2(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiQuery({ name: 'airportCode', type: 'string' })
  @ApiOperation({
    description:
      '3.	Вывести полное название аэропорта совместно с таблицей рейсов.',
  })
  @Get('task3')
  public task3(@Query() query: Task3Dto) {
    return this.joinSamplesService.task3(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '4.	Вывести все рейсы, которые были совершены на самолете Airbus.',
  })
  @Get('task4')
  public task4(@Query() query: PaginationDto) {
    return this.joinSamplesService.task4(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      'Вывести информацию о рейсах, где аэропорт отправления находится не в Москве. Необходимые поля: аэропорт отправления; аэропорт прибытия; модель самолета, на которой был совершен рейс.',
  })
  @Get('task5')
  public task5(@Query() query: PaginationDto) {
    return this.joinSamplesService.task5(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '6.	Вывести информацию о рейсах, где аэропорт отправления и прибытия находится не в Москве. Поля аналогично предыдущему заданию.',
  })
  @Get('task6')
  public task6(@Query() query: PaginationDto) {
    return this.joinSamplesService.task6(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description:
      '7.	Вывести только те модели самолетов, которые не летали в Анадырь.',
  })
  @Get('task7')
  public task7(@Query() query: PaginationDto) {
    return this.joinSamplesService.task7(query);
  }
}
