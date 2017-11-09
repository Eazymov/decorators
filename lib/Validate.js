const Validate = (validator) => {
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
                value = validator(newValue) ? newValue : value;
            },
        };
    };
};
export default Validate;
