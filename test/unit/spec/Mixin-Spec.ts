import { Mixin } from 'src';

describe('`Mixin` decorator', function () {

  const MyMixin = Mixin({
    sharedMethod: function () {
      /* ... */
    },

    getThis () {
      return this;
    },

    getArguments (...args: any[]) {
      return args;
    },
  });
  
  @MyMixin
  class Test { }

  const test: any = new Test();

  it('instance should have shared method', function () {
    expect(typeof test.sharedMethod).toBe('function');
  });

  it('shared methods should have properly binded `this`', function () {
    expect(test.getThis() instanceof Test).toBeTruthy();
  });

  it('shared methods should properly get arguments', function () {
    expect(test.getArguments(1, 'a', true)).toEqual([1, 'a', true]);
  });
});
