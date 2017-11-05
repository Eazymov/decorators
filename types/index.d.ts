declare module "decorators";

import {
  Decorator,
} from './utils';

export type Decorator = Decorator;

export const Readonly: Decorator;
export const Freeze: Decorator;
export const Seal: Decorator;
