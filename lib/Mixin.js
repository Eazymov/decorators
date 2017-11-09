import { forEach } from '@eazymov/utils';
const Mixin = (shared) => {
    return (target) => {
        const sharedKeys = Object.keys(shared);
        const prototype = target.prototype;
        forEach(sharedKeys, (key) => {
            Object.defineProperty(prototype, key, {
                value: shared[key],
            });
        });
    };
};
export default Mixin;
