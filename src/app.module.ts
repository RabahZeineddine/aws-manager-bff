import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SharedIniFileCredentials, SQS, Credentials } from 'aws-sdk';
import { AwsSdkModule } from 'nest-aws-sdk';
import env, { AWS_CONFIGURATIONS } from './config/env';
import { SQSQueuesModule } from './resources/SQS/Queues/SQSQueues.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [env, AWS_CONFIGURATIONS]
    }),
    AwsSdkModule.forRootAsync({
      defaultServiceOptions: {
        useFactory: (cs: ConfigService) => {
          return {
            region: cs.get<string>("AWS.region"),
            credentials: new SharedIniFileCredentials({
              profile: cs.get<string>("AWS.profile")
            }),
            endpoint: cs.get<string>("AWS.endpoint")
          };
        },
        imports: [ConfigModule],
        inject: [ConfigService],
      },
    }),
    SQSQueuesModule,
  ],
  controllers: [],
  providers: []
})

export class AppModule { }
