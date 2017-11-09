
const SuppressErrors: MethodDecorator = (
  target: Object,
  prop: PropertyKey,
  descriptor: PropertyDescriptor
): void => {
  const method: Function = descriptor.value;

  descriptor.value = function () {
    try {
      return method.apply(this, arguments);
    } catch (err) {
      return err;
    }
  }
}

export default SuppressErrors;
