import { Decorator } from 'types';

const Describe = (newDescriptor: PropertyDescriptor): Decorator => {
  return (
    target: Object,
    prop: PropertyKey,
    descriptor: PropertyDescriptor = {}
  ): void => {
    const changedKeys: Array<string> = Object.keys(newDescriptor);

    changedKeys.forEach((key: string) => {
      descriptor[key] = newDescriptor[key];
    });
  }
}

export default Describe;
