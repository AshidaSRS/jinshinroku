import { db } from '.';
import { MZ } from '../common/custom-zod';
import { registrySchema } from '../schemas/registry';
import { DbRegistry, RegistryStatus } from '../types/registry';
import { applySchema } from '../common/utils';
import * as Z from 'myzod';

export const insertRegistryBaseReturningId = async (): Promise<
  string | undefined
> => {
  const registryRow = await db`
      insert into psy.registry
        (status)
      values
        ('initiated')
      returning id
    `;
  const id = registryRow[0]?.id;
  return applySchema(id, MZ.uuid);
};

export const selectRegistryByStatus = async (
  status: RegistryStatus,
): Promise<DbRegistry | undefined> => {
  const registryRow = await db`
      select * from psy.registry where status = ${status}
    `;
  const registry = registryRow[0];
  return applySchema(registry, registrySchema);
};

export const updateRegistry = async (
  status: RegistryStatus,
  data: {
    status?: RegistryStatus;
    situation?: string;
    thoughts?: string;
    emotion?: string;
    sensation?: string;
    conduct?: string;
    consequences?: string;
    previous_situations?: string;
    rationalizing_thoughts?: string;
  },
): Promise<undefined> => {
  const columnsToUpdate: Array<keyof typeof data> = Object.keys(data).reduce<
    Array<keyof typeof data>
  >((acc, k) => (data[k] ? [...acc, k as keyof typeof data] : acc), []);
  const updateData = db(data, columnsToUpdate);
  await db`
    update psy.registry
    set ${updateData}
    where status = ${status.toString()}
    `;
  return;
};

export const selectInProgressRegistry = async (): Promise<
  DbRegistry | undefined
> => {
  const registryRow = await db`
        select * from psy.registry where status != 'done' and status != 'error'
      `;
  const registry = registryRow[0];
  return applySchema(registry, registrySchema);
};

export const selectRegistries = async (): Promise<
  Pick<DbRegistry, 'id' | 'emotion' | 'created_at'>[]
> => {
  const registryRow = await db`
        select id, emotion, created_at from psy.registry where status = 'done' and date(created_at) = date(now())
      `;
  const registry = registryRow;
  return (
    applySchema(
      registry,
      Z.array(Z.pick(registrySchema, ['id', 'emotion', 'created_at'])),
    ) || []
  );
};
