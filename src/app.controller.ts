import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('task-1')
  public getTask1Data() {
    return this.appService.getTask1Data();
  }
  @Get('task-2')
  public getTask2Data() {
    return this.appService.getTask2Data();
  }
  @Get('task-3')
  public getTask3Data() {
    return this.appService.getTask3Data();
  }
  @Get('task-4')
  public getTask4Data() {
    return this.appService.getTask4Data();
  }
}
