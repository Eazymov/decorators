import { Describe } from 'package';

describe('`Describe` decorator', function () {

  class Test {

    @Describe({
      writable: false,
      enumerable: false,
      configurable: false,
    })
    field = 1;
  }

  const test = new Test();
  const descriptor = Object.getOwnPropertyDescriptor(test, 'field');

  it('field should not be writable', function () {
    expect(descriptor.writable).toBeFalsy();
  });

  it('field should not be enumerable', function () {
    expect(descriptor.enumerable).toBeFalsy();
  });

  it('field should not be configurable', function () {
    expect(descriptor.enumerable).toBeFalsy();
  });
});
