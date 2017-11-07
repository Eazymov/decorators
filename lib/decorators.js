const Readonly = (target, prop, desc = {}) => {
    desc.writable = false;
};
const Freeze = (target) => {
    function Frozen() {
        target.apply(this, arguments);
        Object.freeze(this);
    }
    Frozen.prototype = target.prototype;
    return Frozen;
};
const Seal = (target) => {
    function Sealed() {
        target.apply(this, arguments);
        Object.seal(this);
    }
    Sealed.prototype = target.prototype;
    return Sealed;
};
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
export { Readonly, Freeze, Seal, Mixin, };
