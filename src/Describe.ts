import { Decorator } from 'types';
import { forEach } from '@eazymov/utils';

const Describe = (newDescriptor: PropertyDescriptor): Decorator => {
  return (
    target: Object,
    prop: PropertyKey,
    descriptor: PropertyDescriptor = {}
  ): void => {
    const changedKeys: Array<string> = Object.keys(newDescriptor);

    forEach(changedKeys, (key: string) => {
      descriptor[key] = newDescriptor[key];
    });
  }
}

export default Describe;
