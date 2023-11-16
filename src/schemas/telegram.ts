import * as Z from 'myzod';
import { commands } from '../types/telegram';

export const tokenSchema = Z.string();
export const commandsSchema = Z.literals(...commands);
