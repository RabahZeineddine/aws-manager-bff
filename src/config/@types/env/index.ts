export interface EnvConfiguration {
  PORT: number;
  NODE_ENV: string;
};


export interface AwsConfiguration {
  endpoint: string;
  region: string;
  profile: string
}
