import * as Z from 'myzod';
import { MZ } from '../common/custom-zod';

export type EnvType<T extends EnvTypeLiteral, E = never> = T extends 'number'
  ? number
  : T extends 'string'
    ? string
    : T extends 'boolean'
      ? boolean
      : T extends 'object'
        ? Record<string, any>
        : T extends 'custom'
          ? E
          : T extends 'literal'
            ? E
            : never;
export type EnvTypeLiteral =
  | 'number'
  | 'string'
  | 'boolean'
  | 'object'
  | 'custom'
  | 'literal';

export type GuardEnvType<T extends EnvTypeLiteral> = (
  x: any,
  schema?: AnyZodType,
) => EnvType<T, Z.Infer<typeof schema>>;

export type AnyZodType = Z.Type<any>;
export type ZodType<E> = Z.Type<E>;

export type EnvConfig<T extends EnvTypeLiteral, E = never> = {
  isOptional?: boolean;
  type?: GuardEnvType<T>;
  schema?: ZodType<E>;
  defaultValue?: EnvType<T>;
};

export type Json = Z.Infer<typeof MZ.json>;
