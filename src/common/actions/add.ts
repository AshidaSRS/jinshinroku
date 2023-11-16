import { insertRegistryBaseReturningId } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { info } from '../logger';

const AUDIT = 'command.add';

export const addCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'add command' });
  await insertRegistryBaseReturningId();
  context.reply(
    'Send an emotion now, if you do not know which, use /emotions for it',
  );
};
