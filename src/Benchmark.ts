
const Benchmark: MethodDecorator = (
  target: Object,
  prop: PropertyKey,
  descriptor: PropertyDescriptor
): void => {
  const method: Function = descriptor.value;
  const meter: any = (typeof performance !== 'undefined') ? performance : Date;

  descriptor.value = function (): any {
    const action: Function = method.apply.bind(method, this, arguments);
    console.log('Performance before method call is: ' + meter.now());
    const result: any = action();
    console.log('Performance after method call is: ' + meter.now());

    return result;
  }
}

export default Benchmark;
