import { Test, TestingModule } from '@nestjs/testing';
import { JoinSamplesController } from './join-samples.controller';
import { JoinSamplesService } from './join-samples.service';

describe('JoinSamplesController', () => {
  let controller: JoinSamplesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoinSamplesController],
      providers: [JoinSamplesService],
    }).compile();

    controller = module.get<JoinSamplesController>(JoinSamplesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
