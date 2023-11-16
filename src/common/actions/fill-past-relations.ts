import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';

const AUDIT = 'command.fill-past-relations';

export const fillPastRelationsCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-past-relations command' });
  const pastRelations = context.text;
  const registry = await selectRegistryByStatus('pending-past-relations');
  if (!pastRelations || !registry) {
    error(AUDIT, { message: 'Error in data', pastRelations, registry });
    await updateRegistry('pending-past-relations', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('pending-past-relations', {
    status: 'pending-rational-thoughts',
    previous_situations: pastRelations,
  });
  context.reply('Send a rational thought that might be in this situation');
};
