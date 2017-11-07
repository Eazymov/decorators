
const Extends = (...ancestors: any[]): ClassDecorator => {
  return <TFunction extends Function>(target: TFunction) => {
    let prototype = {};

    ancestors.forEach((ancestor: TFunction) => {
      prototype = ancestor.prototype;
      
    });
  }
}

export default Extends;
