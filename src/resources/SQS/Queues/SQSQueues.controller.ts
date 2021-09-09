import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { SQSQueuesService } from './SQSQueues.service';
import { JoiValidationPipe } from '../../../pipes/JoiValidation/JoiValidation.pipe';
import { createQueueSchema, deleteQueueSchema, findOneQueueParamsSchema } from './schemas/index';
import { CreateQueueDTO, DeleteQueueDTO, FindOneQueueParamsDTO } from './dto/index';

@Controller('SQS/queues')
export class SQSQueuesController {
  constructor(private readonly sqsQueuesService: SQSQueuesService) { }

  @Get()
  async findAll() {
    return await this.sqsQueuesService.findAll();
  }

  @Get(':url')
  @UsePipes(new JoiValidationPipe(findOneQueueParamsSchema))
  findOne(@Param() params: FindOneQueueParamsDTO) {
    return this.sqsQueuesService.findOne(params);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createQueueSchema))
  async create(@Body() queueData: CreateQueueDTO) {
    return this.sqsQueuesService.create(queueData)
  }

  @Delete(':url')
  @UsePipes(new JoiValidationPipe(deleteQueueSchema))
  async remove(@Param() params: DeleteQueueDTO) {
    return await this.sqsQueuesService.remove(params);
  }
}
