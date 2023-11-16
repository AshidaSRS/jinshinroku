import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';

const AUDIT = 'command.fill-consequences';

export const fillConsequencesCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-consequences command' });
  const consequences = context.text;
  const registry = await selectRegistryByStatus('pending-consequences');
  if (!consequences || !registry) {
    error(AUDIT, { message: 'Error in data', consequences, registry });
    await updateRegistry('pending-consequences', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('pending-consequences', {
    status: 'pending-past-relations',
    consequences: consequences === 'nada' ? undefined : consequences,
  });
  context.reply('Send a possible past relation now');
};
