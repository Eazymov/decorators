import { Decorator, Shared } from 'types';

const Readonly: Decorator = (
  target: Object,
  prop: PropertyKey,
  desc: PropertyDescriptor = {}
) => {
  desc.writable = false;
}

const Freeze: ClassDecorator = <TFunction extends Function>(target: TFunction): any => {
  function Frozen(this: typeof Frozen): void {
    target.apply(this, arguments);
    Object.freeze(this);
  }

  Frozen.prototype = target.prototype;

  return Frozen;
};

const Seal: ClassDecorator = <TFunction extends Function>(target: TFunction): any => {
  function Sealed(this: typeof target): void {
    target.apply(this, arguments);
    Object.seal(this);
  }

  Sealed.prototype = target.prototype;

  return Sealed;
};

const Mixin = (shared: Shared): ClassDecorator => {
  return <TFunction extends Function>(target: TFunction) => {
    const sharedKeys: Array<string> = Object.keys(shared);

    sharedKeys
      .forEach((key: string) => {
        Object.defineProperty(target.prototype, key, {
          value: shared[key],
        });
      });
  };
};

export {
  Readonly,
  Freeze,
  Seal,
  Mixin,
};
