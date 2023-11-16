import * as Z from 'myzod';
import Decimal from 'decimal.js';
import { validate } from 'uuid';
import { MyCustomZod } from '../types/custom-zod';

const ZBoolean = Z.string()
  .valid(['true', 'false'])
  .map((value) => value === 'true')
  .or(Z.boolean())
  .map(Boolean);

const uuidValidationSchema = Z.string().withPredicate(
  (value) => validate(value),
  'Id is not a valid uuid',
);

export const jsonTypeSchema = Z.string()
  .map((value) => {
    // Workaround as Z.number().coerce() transforms uuids to number
    const possibleNumber = Number(value);
    if (isNaN(possibleNumber)) {
      return value;
    }
    return possibleNumber;
  })
  .or(Z.number().coerce())
  .or(ZBoolean)
  .or(Z.array(Z.lazy(() => jsonTypeSchema)))
  .nullable()
  .optional();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objectTypeSchema: Z.ObjectType<any> = Z.object({
  [Z.keySignature]: jsonTypeSchema
    .or(Z.lazy(() => objectTypeSchema))
    .or(Z.array(Z.lazy(() => objectTypeSchema))),
});

export const decimalSchema = Z.number()
  .coerce()
  .map((n) => new Decimal(n));

export const generateOptionalFromNullOrOptionalSchema = <T>(s: Z.Type<T>) =>
  s
    .optional()
    .nullable()
    .map((v) => v || undefined);

export const MZ: MyCustomZod = {
  uuid: uuidValidationSchema,
  boolean: ZBoolean,
  json: objectTypeSchema,
  jsonValue: jsonTypeSchema,
  decimal: decimalSchema,
  optional: generateOptionalFromNullOrOptionalSchema,
};
