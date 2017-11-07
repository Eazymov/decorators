const Once = (target, prop, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function () {
        method.apply(this, arguments);
        this[prop] = undefined;
    };
    delete descriptor.initializer;
    Object.defineProperty(target, prop, descriptor);
};
export default Once;
