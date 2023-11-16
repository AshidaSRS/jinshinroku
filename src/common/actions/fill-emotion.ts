import { selectRegistryByStatus, updateRegistry } from '../../db/registry';
import { emotionsSchema } from '../../schemas/emotions';
import { TelegramAction } from '../../types/telegram';
import { error, info } from '../logger';
import { applySchema } from '../utils';

const AUDIT = 'command.fill-emotion';

export const fillEmotionCommand: TelegramAction = async (context) => {
  info(AUDIT, { message: 'fill-emotion command' });
  const registry = await selectRegistryByStatus('initiated');
  const emotion = context.text?.toLowerCase();
  const safeEmotion = applySchema(emotion, emotionsSchema);
  info(AUDIT, {
    registry,
    safeEmotion,
    emotion,
  });
  if (!safeEmotion || !registry) {
    error(AUDIT, { message: 'Error in data', safeEmotion, emotion, registry });
    await updateRegistry('initiated', {
      status: 'error',
    });
    return;
  }
  await updateRegistry('initiated', {
    status: 'pending-situation',
    emotion: safeEmotion,
  });
  context.reply('Send a situation now');
};
