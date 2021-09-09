import { Module } from '@nestjs/common';
import { SNSTopicsService } from './SNSTopics.service';
import { SNSTopicsController } from './SNSTopics.controller';
import { AwsSdkModule } from 'nest-aws-sdk';
import { SNS } from 'aws-sdk';

@Module({
  imports: [
    AwsSdkModule.forFeatures([SNS])
  ],
  controllers: [SNSTopicsController],
  providers: [SNSTopicsService]
})
export class SNSTopicsModule { }
