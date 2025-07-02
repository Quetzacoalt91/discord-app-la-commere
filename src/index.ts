
import express from 'express';
import {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
} from 'discord-interactions';
import { config } from './discord/config';

const PORT = process.env.PORT || 3000;

const app = express();

app.post('/interactions', [verifyKeyMiddleware(config.DISCORD_PUBLIC_KEY), async function (req, res) {
  // Interaction id, type and data
  const { id, type, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }
}]);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
