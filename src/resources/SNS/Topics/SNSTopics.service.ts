import { Injectable } from '@nestjs/common';
import { SNS } from 'aws-sdk';
import { InjectAwsService } from 'nest-aws-sdk';

@Injectable()
export class SNSTopicsService {

  constructor(
    @InjectAwsService(SNS) private readonly snsService: SNS) {

  }

  async findAll() {
    const response = await this.snsService.listTopics().promise()
    const topics = response.Topics || []
    return topics.map((topic: { TopicArn: string }) => {
      const splittedTopic = topic.TopicArn.split(":")
      return {
        arn: topic.TopicArn,
        name: splittedTopic[splittedTopic.length - 1]
      }
    })
  }
}
