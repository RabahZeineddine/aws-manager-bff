import { Module } from '@nestjs/common';
import { SQSQueuesService } from './SQSQueues.service';
import { SQSQueuesController } from './SQSQueues.controller';
import { AwsSdkModule } from 'nest-aws-sdk';
import { SQS } from 'aws-sdk';

@Module({
  imports: [
    AwsSdkModule.forFeatures([SQS])
  ],
  controllers: [SQSQueuesController],
  providers: [
    SQSQueuesService
  ]
})
export class SQSQueuesModule { }
