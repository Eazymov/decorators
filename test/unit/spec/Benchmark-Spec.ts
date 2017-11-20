import { Benchmark } from 'src';

describe('`Benchmark` decorator', function (): void {

  class Test {

    public field: number = 1;

    @Benchmark
    public benchmarkedMethod (): void {
      /* ... */
    }

    @Benchmark
    public getThis (): Test {
      return this;
    }

    @Benchmark
    public getArguments (...args: Array<any>): Array<any> {
      return args;
    }
  }

  const test: Test = new Test();

  it('instance should have benchmarked method', function (): void {
    expect(typeof test.benchmarkedMethod).toBe('function');
  })

  it('benchmarked methods should have properly binded `this`', function (): void {
    expect(test.getThis() instanceof Test).toBeTruthy();
  })

  it('benchmarked methods should properly get arguments', function (): void {
    expect(test.getArguments(1, 'a', true)).toEqual([1, 'a', true]);
  })
})
