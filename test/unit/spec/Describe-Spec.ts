import { Describe } from 'src';

describe('`Describe` decorator', function (): void {

  class Test {

    @Describe({
      writable: true,
      enumerable: false,
      configurable: false,
    })
    public field: number = 1;
  }

  const test: Test = new Test();
  const descriptor: PropertyDescriptor = <PropertyDescriptor>Object.getOwnPropertyDescriptor(test, 'field');
  console.log(descriptor);

  it('field should not be writable', function (): void {
    expect(descriptor.writable).toBeFalsy();
  })

  it('field should not be enumerable', function (): void {
    expect(descriptor.enumerable).toBeFalsy();
  })

  it('field should not be configurable', function (): void {
    expect(descriptor.enumerable).toBeFalsy();
  })
})
