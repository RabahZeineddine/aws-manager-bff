import { Test, TestingModule } from '@nestjs/testing';
import { SQSQueuesService } from './SQSQueues.service';

describe('SQSQueuesService', () => {
  let service: SQSQueuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SQSQueuesService],
    }).compile();

    service = module.get<SQSQueuesService>(SQSQueuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
