const Seal = (target) => {
    function Sealed() {
        target.apply(this, arguments);
        Object.seal(this);
    }
    Sealed.prototype = target.prototype;
    return Sealed;
};
export default Seal;
