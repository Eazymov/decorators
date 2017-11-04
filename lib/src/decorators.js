const Readonly = (target, prop, desc) => {
    desc.writable = false;
};
const Freeze = (target) => {
    function Frozen(...args) {
        target.apply(this, args);
        Object.freeze(this);
    }
    Frozen.prototype = target.prototype;
    return Frozen;
};
const Seal = (target) => {
    function Sealed(...args) {
        target.apply(this, args);
        Object.seal(this);
    }
    Sealed.prototype = target.prototype;
    return Sealed;
};
export { Readonly, Freeze, Seal, };
