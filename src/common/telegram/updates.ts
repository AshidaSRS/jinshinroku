import { bot } from '.';
import { mapCommands } from '../actions';
import { ignoreOtherUsers } from '../utils';

export const useUpdates = () => {
  bot.updates.on('message', ignoreOtherUsers(mapCommands));
};
