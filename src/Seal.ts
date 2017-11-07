
const Seal: ClassDecorator = <TFunction extends Function>(target: TFunction): any => {
  function Sealed(this: typeof target): void {
    target.apply(this, arguments);
    Object.seal(this);
  }

  Sealed.prototype = target.prototype;

  return Sealed;
};

export default Seal;
