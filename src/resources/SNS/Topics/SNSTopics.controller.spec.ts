import { Test, TestingModule } from '@nestjs/testing';
import { SNSTopicsController } from './SNSTopics.controller';
import { SNSTopicsService } from './SNSTopics.service';

describe('SNSTopicsController', () => {
  let controller: SNSTopicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SNSTopicsController],
      providers: [SNSTopicsService],
    }).compile();

    controller = module.get<SNSTopicsController>(SNSTopicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
