import { MessageContext } from 'puregram';

export type TelegramAction = (context: MessageContext) => Promise<unknown>;

export const commands = ['/add', '/list', '/help', '/emotions'] as const;
export type Command = (typeof commands)[number];
