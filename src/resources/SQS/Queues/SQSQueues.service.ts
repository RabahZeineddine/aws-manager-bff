import { Injectable } from '@nestjs/common';
import { SQS } from 'aws-sdk';
import { InjectAwsService } from 'nest-aws-sdk';
import { CreateQueueDTO, DeleteQueueDTO } from './dto/index';

@Injectable()
export class SQSQueuesService {

  constructor(
    @InjectAwsService(SQS) private readonly sqsService: SQS,
  ) { }

  async findAll() {
    const response = await this.sqsService.listQueues().promise()
    const queueUrls = response.QueueUrls || []
    return queueUrls.map((queueUrl: string) => {
      const splittedUrl = queueUrl.split('/')
      return {
        queueUrl,
        name: splittedUrl[splittedUrl.length - 1]
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} sq`;
  }

  async create(queueData: CreateQueueDTO) {
    const response = await this.sqsService.createQueue({
      QueueName: queueData.name,
      tags: {
        ...queueData.tags,
        created_by: 'AWS Manager'
      }
    }).promise()
    return {
      QueueUrl: response.QueueUrl
    }
  }

  async remove(data: DeleteQueueDTO) {
    await this.sqsService.deleteQueue({ QueueUrl: data.url }).promise()
  }
}
