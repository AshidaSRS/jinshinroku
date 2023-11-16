import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';

const AUDIT = 'command.fill-sensation';

export const fillSensationCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-sensation command' });
  const sensation = context.text?.toLowerCase();
  const registry = await selectRegistryByStatus('pending-sensation');
  if (!sensation || !registry) {
    error(AUDIT, { message: 'Error in data', sensation, registry });
    await updateRegistry('pending-sensation', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('pending-sensation', {
    status: 'pending-conduct',
    sensation,
  });
  context.reply('Send how was your conduct in this situation');
};
