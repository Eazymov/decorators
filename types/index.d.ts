declare module "decorators";

import {
  Decorator,
  Shared,
} from './utils';

export type Decorator = Decorator;
export type Shared = Shared;

export const Readonly: Decorator;
export const Freeze: ClassDecorator;
export const Seal: ClassDecorator;
export const Mixin: (shared: Shared) => ClassDecorator;
