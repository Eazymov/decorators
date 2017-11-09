const Watch = (handler) => {
    return (target, prop, descriptor = {}) => {
        let value = descriptor.value;
        descriptor.get = function () {
            return value;
        };
        descriptor.set = function (newValue) {
            handler(newValue);
            value = newValue;
        };
        delete descriptor.value;
        delete descriptor.writable;
        delete descriptor.initializer;
    };
};
export default Watch;
