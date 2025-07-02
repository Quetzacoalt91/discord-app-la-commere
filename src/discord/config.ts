import 'dotenv/config';
import { GatewayVersion } from 'discord-api-types/gateway/v10';

["DISCORD_APP_ID", "DISCORD_TOKEN", "DISCORD_PUBLIC_KEY"].forEach(
  (envVar: string) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing environment variable ${envVar}`);
    }
  }
);

const { DISCORD_APP_ID, DISCORD_TOKEN, DISCORD_PUBLIC_KEY } = process.env;

export const config = {
  DISCORD_APP_ID: DISCORD_APP_ID!,
  DISCORD_TOKEN: DISCORD_TOKEN!,
  DISCORD_PUBLIC_KEY: DISCORD_PUBLIC_KEY!,
  DISCORD_API_VERSION: GatewayVersion,
};
