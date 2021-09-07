import { Test, TestingModule } from '@nestjs/testing';
import { SQSQueuesController } from './SQSQueues.controller';
import { SQSQueuesService } from './SQSQueues.service';

describe('SQSQueuesController', () => {
  let controller: SQSQueuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SQSQueuesController],
      providers: [SQSQueuesService],
    }).compile();

    controller = module.get<SQSQueuesController>(SQSQueuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
