import { registerAs } from '@nestjs/config';
import { AwsConfiguration, EnvConfiguration } from '../@types/env';

export default (): EnvConfiguration => ({
  PORT: parseInt(process.env.PORT, 10) || 5000,
  NODE_ENV: process.env.NODE_ENV,
});

export const AWS_CONFIGURATIONS = registerAs("AWS", (): AwsConfiguration => ({
  endpoint: process.env.AWS_ENDPOINT_URL,
  region: process.env.AWS_DEFAULT_REGION,
  profile: process.env.AWS_PROFILE
}))
