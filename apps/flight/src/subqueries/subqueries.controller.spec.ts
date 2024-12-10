import { Test, TestingModule } from '@nestjs/testing';
import { SubqueriesController } from './subqueries.controller';
import { SubqueriesService } from './subqueries.service';

describe('SubqueriesController', () => {
  let controller: SubqueriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubqueriesController],
      providers: [SubqueriesService],
    }).compile();

    controller = module.get<SubqueriesController>(SubqueriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
