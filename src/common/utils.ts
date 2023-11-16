import { MessageContext, Middleware, NextMiddleware } from 'puregram';
import { Type, env } from './env';
import * as Z from 'myzod';
import { error } from './logger';

const USER_ID = env('USER_ID', { type: Type.number });

export const ignoreOtherUsers =
  (fn: Middleware<MessageContext>) =>
  (context: MessageContext, nextMiddleware: NextMiddleware) => {
    if (context.from?.id !== USER_ID) {
      return;
    }
    return fn(context, nextMiddleware);
  };

export const applySchema = <T>(
  data: unknown,
  schema: Z.Type<T>,
): T | undefined => {
  const res = schema.try(data);
  if (res instanceof Z.ValidationError) {
    error('validation', {
      data,
      message: res.message,
    });
    return;
  }
  return res;
};
