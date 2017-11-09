import { Shared } from 'types';
import { forEach } from '@eazymov/utils';

const Mixin = (shared: Shared): ClassDecorator => {
  return <TFunction extends Function>(target: TFunction): void => {
    const sharedKeys: Array<string> = Object.keys(shared);
    const prototype: any = target.prototype;

    forEach(sharedKeys, (key: string) => {
      Object.defineProperty(prototype, key, {
        value: shared[key],
      });
    });
  };
};

export default Mixin;
