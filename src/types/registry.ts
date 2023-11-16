import * as Z from 'myzod';
import { registrySchema, status } from '../schemas/registry';

export type RegistryStatus = (typeof status)[number];
export type DbRegistry = Z.Infer<typeof registrySchema>;
