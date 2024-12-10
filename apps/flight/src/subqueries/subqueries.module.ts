import { Module } from '@nestjs/common';
import { SubqueriesService } from './subqueries.service';
import { SubqueriesController } from './subqueries.controller';

@Module({
  controllers: [SubqueriesController],
  providers: [SubqueriesService],
})
export class SubqueriesModule {}
