import { Validate } from 'src';

describe('`Validator` decorator', function () {
  
  const isString = (val: any) => typeof val === 'string';

  class Test {

    @Validate(isString)
    field = 'string';
  }

  const test: any = new Test();

  it('property should update when new value is valid', function () {
    test.field = 'new string';

    expect(test.field).toEqual('new string');
  });

  it('property should not update when new value is not valid', function () {
    test.field = 1;

    expect(test.field).not.toEqual(1);
  });
});
