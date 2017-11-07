
const Once: MethodDecorator = (
  target: Object,
  prop: PropertyKey,
  descriptor: PropertyDescriptor
): void => {
  const method: Function = descriptor.value;

  descriptor.value = function () {
    method.apply(this, arguments);

    this[prop] = undefined;
  }

  delete (<any>descriptor).initializer;
  
  Object.defineProperty(target, prop, descriptor);
}

export default Once;
