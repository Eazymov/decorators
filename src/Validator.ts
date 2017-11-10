import { Decorator } from 'types';

const Validator = (checker: Function): Decorator => {
  return (
    target: Object,
    prop: PropertyKey,
    descriptor: PropertyDescriptor = {}
  ): any => {
    let value: any = descriptor.value;
    const { enumerable, configurable } = descriptor;

    return {
      enumerable,
      configurable,
      
      get (): any {
        return value;
      },
  
      set (newValue: any) {
        value = checker(newValue) ? newValue : value;
      },
    }
  }
}

export default Validator;
