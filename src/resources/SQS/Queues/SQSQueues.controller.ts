import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { SQSQueuesService } from './SQSQueues.service';
import { JoiValidationPipe } from '../../../pipes/JoiValidation/JoiValidation.pipe';
import { createQueueSchema, deleteQueueSchema } from './schemas/index';
import { CreateQueueDTO, DeleteQueueDTO } from './dto/index';

@Controller('SQS/queues')
export class SQSQueuesController {
  constructor(private readonly sqsQueuesService: SQSQueuesService) { }

  @Get()
  async findAll() {
    return await this.sqsQueuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sqsQueuesService.findOne(+id);
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
