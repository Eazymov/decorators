const Mixin = (shared) => {
    return (target) => {
        const sharedKeys = Object.keys(shared);
        const prototype = target.prototype;
        sharedKeys.forEach((key) => {
            Object.defineProperty(prototype, key, {
                value: shared[key],
            });
        });
    };
};
export default Mixin;
