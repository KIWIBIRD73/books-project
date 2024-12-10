import { Controller, Get, Query } from '@nestjs/common';
import { AdditionalsService } from './additionals.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '@common/dto/pagination.dto';

@ApiTags('additionals')
@Controller('additionals')
export class AdditionalsController {
  constructor(private readonly additionalsService: AdditionalsService) {}

  @ApiOperation({
    description:
      '1.	Сколько различных имен пассажиров зарегистрировано в системе',
  })
  @Get('task-1')
  public task1() {
    return this.additionalsService.task1();
  }

  @ApiOperation({
    description: '2.	Сколько пассажиров не ввели свою почту.',
  })
  @Get('task-2')
  public task2() {
    return this.additionalsService.task2();
  }

  @ApiOperation({
    description: '3.	Сколько зарегистрировано пассажиров с именем Артем.',
  })
  @Get('task-3')
  public task3() {
    return this.additionalsService.task3();
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description: '4.	Найти всех пассажиров, которые летят в Анадырь.',
  })
  @Get('task-4')
  public task4(@Query() query: PaginationDto) {
    return this.additionalsService.task4(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description: '5.	Найти всех пассажиров, которые летят из Домодедово.',
  })
  @Get('task-5')
  public task5(@Query() query: PaginationDto) {
    return this.additionalsService.task5(query);
  }

  @ApiQuery({ name: 'limit', type: 'number' })
  @ApiQuery({ name: 'page', type: 'number' })
  @ApiOperation({
    description: '6.	Вывести всех пассажиров, которые летят бизнес-классом.',
  })
  @Get('task-6')
  public task6(@Query() query: PaginationDto) {
    return this.additionalsService.task6(query);
  }

  @ApiOperation({
    description: '7.	Найти пассажира, который купил самый дорогой билет.',
  })
  @Get('task-7')
  public task7() {
    return this.additionalsService.task7();
  }

  @ApiOperation({
    description:
      '8.	Найти рейс, где был самый низкий процент загрузки самолета.',
  })
  @Get('task-8')
  public task8() {
    return this.additionalsService.task8();
  }
}
