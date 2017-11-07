const SuppressErrors = (target, prop, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function () {
        try {
            method.apply(this, arguments);
        }
        catch (err) {
            return;
        }
    };
    delete descriptor.initializer;
};
export default SuppressErrors;
