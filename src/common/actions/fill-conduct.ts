import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';

const AUDIT = 'command.fill-conduct';

export const fillConductCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-conduct command' });
  const conduct = context.text;
  const registry = await selectRegistryByStatus('pending-conduct');
  if (!conduct || !registry) {
    error(AUDIT, { message: 'Error in data', conduct, registry });
    await updateRegistry('pending-conduct', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('pending-conduct', {
    status: 'pending-consequences',
    conduct,
  });
  context.reply('Send consequences now');
};
