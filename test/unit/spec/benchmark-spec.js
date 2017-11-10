import { Benchmark } from 'package';

describe('`Benchmark` decorator:', function () {

  class Test {

    field = 1;

    @Benchmark benchmarkedMethod () {
      /* ... */
    }

    @Benchmark getThis () {
      return this;
    }

    @Benchmark getArguments (...args) {
      return args;
    }
  }

  const test = new Test();
  const performance = 123;

  it('instance `test` should have `benchmarkedMethod`', function () {
    expect(typeof test.benchmarkedMethod).toBe('function');
  });

  it('benchmarked methods should have properly binded `this`', function () {
    expect(test.getThis() instanceof Test).toBeTruthy();
  });

  it('benchmarked methods should properly get arguments', function () {
    expect(test.getArguments(1, 'a', true)).toEqual([1, 'a', true]);
  });
});
