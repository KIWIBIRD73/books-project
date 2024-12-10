import { Test, TestingModule } from '@nestjs/testing';
import { SubqueriesService } from './subqueries.service';

describe('SubqueriesService', () => {
  let service: SubqueriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubqueriesService],
    }).compile();

    service = module.get<SubqueriesService>(SubqueriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
