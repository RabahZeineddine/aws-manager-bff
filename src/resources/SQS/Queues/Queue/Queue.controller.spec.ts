import { Test, TestingModule } from '@nestjs/testing';
import { QueueController } from './Queue.controller';
import { QueueService } from './Queue.service';

describe('QueueController', () => {
  let controller: QueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueController],
      providers: [QueueService],
    }).compile();

    controller = module.get<QueueController>(QueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
