import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';

const AUDIT = 'command.fill-rational-thoughts';

export const fillRationalThoughtsCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-rational-thoughts command' });
  const rationalThoughts = context.text;
  const registry = await selectRegistryByStatus('pending-rational-thoughts');
  if (!rationalThoughts || !registry) {
    error(AUDIT, { message: 'Error in data', rationalThoughts, registry });
    await updateRegistry('pending-rational-thoughts', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('pending-rational-thoughts', {
    status: 'done',
    rationalizing_thoughts: rationalThoughts,
  });
  context.reply('Finished! Use /add to start with another registry');
};
