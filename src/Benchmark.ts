
const Benchmark: MethodDecorator = (
  target: Object,
  prop: PropertyKey,
  descriptor: PropertyDescriptor
): void => {
  const method: Function = descriptor.value;

  descriptor.value = function () {
    console.log('Performance before method call is: ' + performance.now());
    method.apply(this, arguments);
    console.log('Performance after method call is: ' + performance.now());
  }
}

export default Benchmark;
