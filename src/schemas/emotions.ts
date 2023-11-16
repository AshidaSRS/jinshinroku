import * as Z from 'myzod';
import { allEmotions } from '../types/emotions';

export const emotionsSchema = Z.literals(...allEmotions);
