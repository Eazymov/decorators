import { Decorator } from 'types';

const Readonly: Decorator = (
  target: Object,
  prop: PropertyKey,
  desc: PropertyDescriptor = {}
) => {
  desc.writable = false;
}

const Freeze: ClassDecorator = <TFunction extends Function>(target: TFunction): any => {
  function Frozen(this: typeof Frozen, ...args: any[]): void {
    target.apply(this, args);
    Object.freeze(this);
  }

  Frozen.prototype = target.prototype;

  return Frozen;
};

const Seal: ClassDecorator = <TFunction extends Function>(target: TFunction): any => {
  function Sealed(this: typeof target, ...args: any[]): void {
    target.apply(this, args);
    Object.seal(this);
  }

  Sealed.prototype = target.prototype;

  return Sealed;
};

export {
  Readonly,
  Private,
  Freeze,
  Seal,
};
