import { Shared } from 'types';

const Mixin = (shared: Shared): ClassDecorator => {
  return <TFunction extends Function>(target: TFunction) => {
    const sharedKeys: Array<string> = Object.keys(shared);

    sharedKeys
      .forEach((key: string) => {
        Object.defineProperty(target.prototype, key, {
          value: shared[key],
        });
      });
  };
};

export default Mixin;
