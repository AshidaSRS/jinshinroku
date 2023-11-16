import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';

const AUDIT = 'command.fill-situation';

export const fillSituationCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-situation command' });
  const situation = context.text;
  const registry = await selectRegistryByStatus('pending-situation');
  if (!situation || !registry) {
    error(AUDIT, { message: 'Error in data', situation, registry });
    await updateRegistry('pending-situation', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('pending-situation', {
    status: 'pending-thought',
    situation,
  });
  context.reply('Send a thought now');
};
