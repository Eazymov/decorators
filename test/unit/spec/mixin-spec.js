import { Mixin } from 'package';

describe('`Mixin` decorator:', function () {

  const MyMixin = Mixin({
    sharedMethod: function () {
      /* ... */
    },

    getThis () {
      return this;
    },

    passArguments (...args) {
      return args;
    },
  });
  
  @MyMixin
  class Test { }

  const test = new Test();

  it('instance `test` should have `sharedMethod`', function () {
    expect(typeof test.sharedMethod).toBe('function');
  });

  it('shared methods should have properly binded `this`', function () {
    expect(test.getThis() instanceof Test).toBeTruthy();
  });

  it('shared methods should properly get arguments', function () {
    expect(test.passArguments(1, 'a', true)).toEqual([1, 'a', true]);
  })
});
