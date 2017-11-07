
const SuppressErrors: MethodDecorator = (
  target: Object,
  prop: PropertyKey,
  descriptor: PropertyDescriptor
): void => {
  const method: Function = descriptor.value;

  descriptor.value = function () {
    try {
      method.apply(this, arguments);
    } catch (err) {
      return;
    }
  }

  delete (<any>descriptor).initializer;
}

export default SuppressErrors;
