import { Controller, Get, Param, Delete } from '@nestjs/common';
import { FindOneQueueParamsDTO } from '../dto';
import { QueueService } from './Queue.service';

@Controller('SQS/queues/:queueName')
export class QueueController {
  constructor(private readonly queueService: QueueService) { }

  @Get('/attributes')
  findAttributes(@Param() params: FindOneQueueParamsDTO) {
    return this.queueService.findAttributes(params);
  }
}
