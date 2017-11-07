
const Freeze: ClassDecorator = <TFunction extends Function>(target: TFunction): any => {
  function Frozen(this: typeof Frozen): void {
    target.apply(this, arguments);
    Object.freeze(this);
  }

  Frozen.prototype = target.prototype;

  return Frozen;
};

export default Freeze;
