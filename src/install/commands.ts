import { GatewayVersion } from 'discord-api-types/gateway/v10';
import { InstallGlobalCommands } from '../discord/index.js';
import { config } from '../discord/config.js';
import { APIApplicationCommand, ApplicationCommandOptionType, ApplicationCommandType, ApplicationIntegrationType, InteractionContextType } from 'discord-api-types/v10';

// Command containing options
const challengeCommand: Partial<APIApplicationCommand> = {
  name: 'page-test',
  description: 'Open page and get details from it',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      type: ApplicationCommandOptionType.String,
      name: 'url',
      description: 'URL of the page to check',
      required: true,
    },
  ],
  integration_types: [
    ApplicationIntegrationType.GuildInstall,
    ApplicationIntegrationType.UserInstall,
  ],
  contexts: [
    InteractionContextType.Guild,
    InteractionContextType.PrivateChannel,
  ],
};

const commands = [challengeCommand];

InstallGlobalCommands(config.DISCORD_APP_ID, commands);
