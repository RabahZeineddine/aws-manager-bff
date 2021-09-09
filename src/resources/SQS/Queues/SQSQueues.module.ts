import { Module } from '@nestjs/common';
import { SQSQueuesService } from './SQSQueues.service';
import { SQSQueuesController } from './SQSQueues.controller';
import { AwsSdkModule } from 'nest-aws-sdk';
import { SQS } from 'aws-sdk';
import { QueueModule } from './Queue/Queue.module';

@Module({
  imports: [
    AwsSdkModule.forFeatures([SQS]),
    QueueModule
  ],
  controllers: [SQSQueuesController],
  providers: [
    SQSQueuesService
  ]
})
export class SQSQueuesModule { }
