declare module "decorators";

import {
  Decorator,
  Shared,
} from './options';

export type Decorator = Decorator;
export type Shared = Shared;

export const Benchmark: MethodDecorator;
export const SuppressErrors: MethodDecorator;

export const Freeze: ClassDecorator;
export const Seal: ClassDecorator;

export const Readonly: Decorator;

export const Mixin: (shared: Shared) => ClassDecorator;

export const Describe: (descriptor: PropertyDescriptor) => Decorator;
export const Validate: (validator: Function) => Decorator;
export const Watch: (handler: Function) => Decorator;
