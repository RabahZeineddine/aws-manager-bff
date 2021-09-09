import { Injectable } from '@nestjs/common';
import { SQS } from 'aws-sdk';
import { InjectAwsService } from 'nest-aws-sdk';
import { FindOneQueueParamsDTO } from '../dto/index';

@Injectable()
export class QueueService {

  constructor(
    @InjectAwsService(SQS) private readonly sqsService: SQS,
  ) { }

  async findAttributes(params: FindOneQueueParamsDTO) {
    const response = await this.sqsService.getQueueUrl({ QueueName: params.queueName }).promise()
    const queueUrl = response.QueueUrl
    const attributesResponse = await this.sqsService.getQueueAttributes({ QueueUrl: queueUrl, AttributeNames: ['All'] }).promise()
    return attributesResponse.Attributes
  }

  remove(id: number) {
    return `This action removes a #${id} queue`;
  }
}
