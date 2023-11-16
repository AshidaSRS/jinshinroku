import { DiceEmoji, HTML, MarkdownV2, ParseMode } from 'puregram';
import { TelegramAction } from '../../types/telegram';
import { selectRegistries } from '../../db/registry';
import { join } from 'path';

const AUDIT = 'command.help';

export const listCommand: TelegramAction = async (context) => {
  const registries = await selectRegistries();
  if (registries.length === 0) {
    context.send(`No registries yet`, {
      parse_mode: ParseMode.MarkdownV2,
    });
    return;
  }
  const message = registries
    .map((reg) => {
      return `${MarkdownV2.escape(
        `✒ ${reg.id}\n😃 ${reg.emotion}\n📅 ${reg.created_at.toLocaleString(
          'en-GB',
          { timeZone: 'Europe/Madrid' },
        )}`,
      )}`;
    })
    .join('\n\n');
  context.send(message, {
    parse_mode: ParseMode.MarkdownV2,
  });
};
