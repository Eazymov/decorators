const Freeze = (target) => {
    function Frozen() {
        target.apply(this, arguments);
        Object.freeze(this);
    }
    Frozen.prototype = target.prototype;
    return Frozen;
};
export default Freeze;
