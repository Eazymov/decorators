const Describe = (newDescriptor) => {
    return (target, prop, descriptor = {}) => {
        const changedKeys = Object.keys(newDescriptor);
        changedKeys.forEach((key) => {
            descriptor[key] = newDescriptor[key];
        });
    };
};
export default Describe;
