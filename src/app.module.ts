import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Credentials } from 'aws-sdk';
import { AwsSdkModule } from 'nest-aws-sdk';
import env, { AWS_CONFIGURATIONS } from './config/env';
import { SQSQueuesModule } from './resources/SQS/Queues/SQSQueues.module';
import { SNSTopicsModule } from './resources/SNS/Topics/SNSTopics.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [env, AWS_CONFIGURATIONS]
    }),
    AwsSdkModule.forRootAsync({
      defaultServiceOptions: {
        useFactory: (cs: ConfigService) => {
          return {
            region: cs.get<string>("AWS.region"),
            credentials: new Credentials({
              accessKeyId: cs.get<string>("AWS.accessKeyId"),
              secretAccessKey: cs.get<string>("AWS.secretAccessKey"),
            }),
            endpoint: cs.get<string>("AWS.endpoint"),
          };
        },
        imports: [ConfigModule],
        inject: [ConfigService],
      },
    }),
    SQSQueuesModule,
    SNSTopicsModule,
  ],
  controllers: [],
  providers: []
})

export class AppModule { }
