import { Module } from '@nestjs/common';
import { QueueService } from './Queue.service';
import { QueueController } from './Queue.controller';
import { AwsSdkModule } from 'nest-aws-sdk';
import { SQS } from 'aws-sdk';

@Module({
  imports: [
    AwsSdkModule.forFeatures([SQS]),
  ],
  controllers: [QueueController],
  providers: [QueueService]
})
export class QueueModule { }
