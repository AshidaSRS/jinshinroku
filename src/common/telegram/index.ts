import { Telegram } from 'puregram';
import { env } from '../env';

const botToken = env('BOT_TOKEN');
export const bot = Telegram.fromToken(botToken);

export const startPooling = async () => {
  await bot.updates.startPolling();
};
