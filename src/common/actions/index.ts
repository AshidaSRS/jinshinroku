import { commandsSchema } from '../../schemas/telegram';
import { Command, TelegramAction } from '../../types/telegram';
import { info, warn } from '../logger';
import { addCommand } from './add';
import * as Z from 'myzod';
import { helpCommand } from './help';
import { RegistryStatus } from '../../types/registry';
import { fillEmotionCommand } from './fill-emotion';
import { selectInProgressRegistry } from '../../db/registry';
import { fillThoughtsCommand } from './fill-thought';
import { fillSituationCommand } from './fill-situation';
import { fillSensationCommand } from './fill-sensation';
import { fillConductCommand } from './fill-conduct';
import { fillConsequencesCommand } from './fill-consequences';
import { fillPastRelationsCommand } from './fill-past-relations';
import { fillRationalThoughtsCommand } from './fill-rational-thoughts';
import { listCommand } from './list';
import { emotionsCommand } from './emotions';

const AUDIT = 'command.check';

export const consoleLogAction: TelegramAction = async (context) =>
  info(AUDIT, { context });

const commandRecord: Record<Command, TelegramAction> = {
  '/add': addCommand,
  '/list': listCommand,
  '/help': helpCommand,
  '/emotions': emotionsCommand,
};

const statusAction: Record<RegistryStatus, TelegramAction | undefined> = {
  initiated: fillEmotionCommand,
  'pending-thought': fillThoughtsCommand,
  'pending-situation': fillSituationCommand,
  'pending-sensation': fillSensationCommand,
  'pending-conduct': fillConductCommand,
  'pending-consequences': fillConsequencesCommand,
  'pending-past-relations': fillPastRelationsCommand,
  'pending-rational-thoughts': fillRationalThoughtsCommand,
  done: undefined,
  error: undefined,
};

export const mapCommands: TelegramAction = async (context) => {
  const unsafeCommand = context.entities?.find((e) => e.type === 'bot_command');
  if (!unsafeCommand) {
    warn(AUDIT, { message: 'No command found' });
    const registry = await selectInProgressRegistry();
    if (registry) {
      const action = statusAction[registry.status];
      if (!action) {
        warn(AUDIT, { message: 'No action found', registry });
        return;
      }
      return action(context);
    }
    return;
  }
  const command = commandsSchema.try(
    context.text?.slice(unsafeCommand.offset, unsafeCommand.length),
  );
  if (command instanceof Z.ValidationError) {
    warn(AUDIT, { message: command.message });
    return;
  }
  return commandRecord[command](context);
};
