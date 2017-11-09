import { Decorator } from 'types';

const Watch = (handler: Function): Decorator => {
  return (
    target: Object,
    prop: PropertyKey,
    descriptor: PropertyDescriptor = {}
  ): any => {
    let value: any = descriptor.value;
    const { configurable, enumerable } = descriptor;

    return {
      configurable,
      enumerable,
      
      get (): any {
        return value;
      },

      set (newValue: any) {
        handler(newValue);
        value = newValue;
      }
    }
  }
}

export default Watch;
