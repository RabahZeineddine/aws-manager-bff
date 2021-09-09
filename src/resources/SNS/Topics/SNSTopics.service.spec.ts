import { Test, TestingModule } from '@nestjs/testing';
import { SNSTopicsService } from './SNSTopics.service';

describe('SNSTopicsService', () => {
  let service: SNSTopicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SNSTopicsService],
    }).compile();

    service = module.get<SNSTopicsService>(SNSTopicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
