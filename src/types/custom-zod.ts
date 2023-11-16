import Decimal from 'decimal.js';
import * as Z from 'myzod';

export type MyCustomZod = {
  uuid: Z.StringType;
  boolean: Z.MappedType<boolean>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json: Z.ObjectType<any>;
  jsonValue: Z.AnyType;
  decimal: Z.MappedType<Decimal>;
  optional: <T>(i: Z.Type<T>) => Z.MappedType<NonNullable<T> | undefined>;
};
