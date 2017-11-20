import { Decorator } from 'types';

const Describe = (newDescriptor: PropertyDescriptor): Decorator => {
  return (
    target: Object,
    prop: PropertyKey,
    descriptor: PropertyDescriptor = {}
  ): PropertyDescriptor => {
    const changedKeys: Array<string> = Object.keys(newDescriptor);

    changedKeys.forEach((key: string) => {
      descriptor[key] = newDescriptor[key];
    });

    return descriptor;
  }
}

export default Describe;
