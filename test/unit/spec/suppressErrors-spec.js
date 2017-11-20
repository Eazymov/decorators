import { SuppressErrors } from 'package';

describe('`SuppressErrors` decorator', function () {

  class Test {

    @SuppressErrors throwsError () {
      throw new Error();
    }

    @SuppressErrors getThis () {
      return this;
    }

    @SuppressErrors getArguments (...args) {
      return args;
    }
  }

  const test = new Test();

  it('methods should not throw errors', function () {
    expect(test.throwsError).not.toThrowError();
  });

  it('methods should have properly binded `this`', function () {
    expect(test.getThis() instanceof Test).toBeTruthy();
  });

  it('methods should properly get arguments', function () {
    expect(test.getArguments(1, 'a', true)).toEqual([1, 'a', true]);
  });
});
