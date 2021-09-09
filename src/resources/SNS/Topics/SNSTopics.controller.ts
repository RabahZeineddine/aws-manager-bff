import { Controller, Get } from '@nestjs/common';
import { SNSTopicsService } from './SNSTopics.service';

@Controller('SNS/topics')
export class SNSTopicsController {
  constructor(private readonly snsTopicsService: SNSTopicsService) { }
  @Get()
  findAll() {
    return this.snsTopicsService.findAll();
  }
}
