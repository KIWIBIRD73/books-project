import { Module } from '@nestjs/common';
import { JoinSamplesService } from './join-samples.service';
import { JoinSamplesController } from './join-samples.controller';

@Module({
  controllers: [JoinSamplesController],
  providers: [JoinSamplesService],
})
export class JoinSamplesModule {}
