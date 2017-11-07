const Mixin = (shared) => {
    return (target) => {
        const sharedKeys = Object.keys(shared);
        sharedKeys
            .forEach((key) => {
            Object.defineProperty(target.prototype, key, {
                value: shared[key],
            });
        });
    };
};
export default Mixin;
