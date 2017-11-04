
declare type Target = any;

declare type Property = string|symbol;

declare interface Descriptor {
  writable: boolean;
  configurable: boolean;
  value: any;
  get: () => any;
  set: (value: any) => void;
  enumerable: boolean;
  initializer: (...args: any[]) => any;
}

declare type Decorator = (target: Target, prop: Property, desc: Descriptor) => void;
