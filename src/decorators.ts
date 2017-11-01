
const Readonly = (target: Target, prop: Property, desc: Descriptor) => {
  desc.writable = false;
}

const Freeze = (target: any): any => {
  function Frozen(this: typeof target, ...args: any[]): void {
    target.apply(this, args);
    Object.freeze(this);
  }

  Frozen.prototype = target.prototype;

  return Frozen;
};

const Seal = (target: any): any => {
  function Sealed(this: typeof target, ...args: any[]): void {
    target.apply(this, args);
    Object.seal(this);
  }

  Sealed.prototype = target.prototype;

  return Sealed;
};

export {
  Readonly,
  Freeze,
  Seal,
};
