import * as MyZ from 'myzod';
import {
  AnyZodType,
  EnvTypeLiteral,
  EnvType,
  GuardEnvType,
  ZodType,
  EnvConfig,
} from '../types/env';

const objectFromStringSchema = (schema?: AnyZodType) =>
  MyZ.string().map((value) => {
    try {
      const val = JSON.parse(value) as Record<string, any>;
      if (schema) {
        return schema.try(val);
      }
      return val;
    } catch (e: any) {
      throw new Error(e.message);
    }
  });
const validateStringSchema = (schema?: AnyZodType) =>
  MyZ.string().withPredicate((value) => {
    if (schema) {
      const validate = schema.try(value);
      return !(validate instanceof MyZ.ValidationError);
    }
    return true;
  }, 'Error parsing string');

const typeToZod: Record<
  EnvTypeLiteral,
  (schema?: AnyZodType) => MyZ.Type<any>
> = {
  string: () => MyZ.string(),
  literal: (schema) => validateStringSchema(schema),
  boolean: () => MyZ.literals('true', 'false').map((value) => value === 'true'),
  number: () => MyZ.number().coerce(),
  object: () =>
    objectFromStringSchema().withPredicate(
      (value) => !value.error,
      'Error parsing the object',
    ),
  custom: (schema) => objectFromStringSchema(schema),
};
const applySchema = <T extends EnvTypeLiteral, E = never>(
  x: any,
  type: EnvTypeLiteral,
  customSchema?: AnyZodType,
): EnvType<T, E> => {
  const schema = typeToZod[type](customSchema);
  const validate: EnvType<T, E> | MyZ.ValidationError = schema.try(x);
  if (validate instanceof MyZ.ValidationError) {
    throw new Error(`${x} is not of type ${type}: ${validate.message}`);
  }
  return validate;
};

const stringGuard: GuardEnvType<'string'> = (x: any, schema?: AnyZodType) =>
  applySchema<'string'>(x, 'string', schema);
const booleanGuard: GuardEnvType<'boolean'> = (x: any) =>
  applySchema<'boolean'>(x, 'boolean');
const numberGuard: GuardEnvType<'number'> = (x: any) =>
  applySchema<'number'>(x, 'number');
const objectGuard: GuardEnvType<'object'> = (x: any) =>
  applySchema<'object'>(x, 'object');
const customGuard: GuardEnvType<'custom'> = (x: any, schema?: AnyZodType) =>
  applySchema<'custom'>(x, 'custom', schema);
const literalGuard: GuardEnvType<'literal'> = (x: any, schema?: AnyZodType) =>
  applySchema<'literal'>(x, 'literal', schema);

export const Type = {
  string: stringGuard,
  boolean: booleanGuard,
  number: numberGuard,
  object: objectGuard,
  custom: customGuard,
  literal: literalGuard,
};

export function env<T extends EnvTypeLiteral = 'string', E = never>(
  key: string,
  config?: {
    type?: GuardEnvType<T>;
    isOptional?: false;
    schema?: ZodType<E>;
    defaultValue?: E;
  },
): EnvType<T, E>;
export function env<T extends EnvTypeLiteral = 'string', E = never>(
  key: string,
  config?: {
    type?: GuardEnvType<T>;
    isOptional?: true;
    schema?: ZodType<E>;
    defaultValue: E;
  },
): EnvType<T, E>;
export function env<T extends EnvTypeLiteral = 'string', E = never>(
  key: string,
  config?: {
    type?: GuardEnvType<T>;
    isOptional?: true;
    schema?: ZodType<E>;
    defaultValue?: E;
  },
): EnvType<T, E> | undefined;
export function env<T extends EnvTypeLiteral = 'string', E = never>(
  key: string,
  config?: EnvConfig<T, E>,
): EnvType<T, E> | undefined {
  const optional: boolean = config?.isOptional || false;
  const value: EnvType<'string'> | undefined = process.env[key];
  if (!value && !optional) {
    throw new Error(`${key} is not set`);
  }
  if (value) {
    if (config && config.type) {
      const typedValue = config.type(value, config.schema);
      return typedValue;
    }
  }
  return (value as EnvType<T>) || config?.defaultValue;
}
