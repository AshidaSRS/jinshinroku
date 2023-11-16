import { DiceEmoji, HTML, MarkdownV2, ParseMode } from 'puregram';
import { TelegramAction } from '../../types/telegram';
import { selectRegistries } from '../../db/registry';
import { join } from 'path';
import { allEmotions } from '../../types/emotions';

const AUDIT = 'command.emotions';

export const emotionsCommand: TelegramAction = async (context) => {
  context.send(MarkdownV2.escape([...allEmotions].join('\n')), {
    parse_mode: ParseMode.MarkdownV2,
  });
};
