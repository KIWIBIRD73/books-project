import { Test, TestingModule } from '@nestjs/testing';
import { JoinSamplesService } from './join-samples.service';

describe('JoinSamplesService', () => {
  let service: JoinSamplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinSamplesService],
    }).compile();

    service = module.get<JoinSamplesService>(JoinSamplesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
