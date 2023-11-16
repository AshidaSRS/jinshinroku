import * as Z from 'myzod';
import { MZ } from '../common/custom-zod';

export const status = [
  'initiated',
  'pending-thought',
  'pending-situation',
  'pending-sensation',
  'pending-conduct',
  'pending-consequences',
  'pending-past-relations',
  'pending-rational-thoughts',
  'done',
  'error',
] as const;

export const registrySchema = Z.object({
  id: MZ.uuid,
  status: Z.literals(...status),
  situation: MZ.optional(Z.string()),
  thoughts: MZ.optional(Z.string()),
  emotion: MZ.optional(Z.string()),
  sensation: MZ.optional(Z.string()),
  conduct: MZ.optional(Z.string()),
  consequences: MZ.optional(Z.string()),
  previous_situations: MZ.optional(Z.string()),
  rationalizing_thoughts: MZ.optional(Z.string()),
  created_at: Z.date(),
});
