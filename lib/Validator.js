const Validator = (checker) => {
    return (target, prop, descriptor = {}) => {
        let value = descriptor.value;
        const { enumerable, configurable } = descriptor;
        return {
            enumerable,
            configurable,
            get() {
                return value;
            },
            set(newValue) {
                value = checker(newValue) ? newValue : value;
            },
        };
    };
};
export default Validator;
