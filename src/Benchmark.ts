
const Benchmark: MethodDecorator = (
  target: Object,
  prop: PropertyKey,
  descriptor: PropertyDescriptor
): void => {
  const method: Function = descriptor.value;

  if (typeof window !== 'undefined') {
    descriptor.value = function (): any {
      const action: Function = method.apply.bind(method, this, arguments);
      console.log('Performance before method call is: ' + performance.now());
      const result: any = action();
      console.log('Performance after method call is: ' + performance.now());
  
      return result;
    }
  } else {
    /* ONLY FOR TEST PURPOSE */
    descriptor.value = function (): any {
      const action: Function = method.apply.bind(method, this, arguments);
      const result: any = action();
  
      return result;
    }
  }

}

export default Benchmark;
