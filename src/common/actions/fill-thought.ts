import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';

const AUDIT = 'command.fill-thoughts';

export const fillThoughtsCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-thoughts command' });
  const thoughts = context.text;
  const registry = await selectRegistryByStatus('pending-thought');
  if (!thoughts || !registry) {
    error(AUDIT, { message: 'Error in data', thoughts, registry });
    await updateRegistry('pending-thought', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('pending-thought', {
    status: 'pending-sensation',
    thoughts,
  });
  context.reply('Send a sensation now');
};
