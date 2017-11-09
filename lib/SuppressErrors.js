const SuppressErrors = (target, prop, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function () {
        try {
            return method.apply(this, arguments);
        }
        catch (err) {
            return err;
        }
    };
};
export default SuppressErrors;
