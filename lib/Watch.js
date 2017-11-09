const Watch = (handler) => {
    return (target, prop, descriptor = {}) => {
        let value = descriptor.value;
        const { configurable, enumerable } = descriptor;
        return {
            configurable,
            enumerable,
            get() {
                return value;
            },
            set(newValue) {
                handler(newValue);
                value = newValue;
            }
        };
    };
};
export default Watch;
