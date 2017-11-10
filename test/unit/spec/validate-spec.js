import { Validator } from 'package';

describe('`Validator` decorator:', function () {
  
  const isString = (val) => typeof val === 'string';

  class Test {

    @Validator(isString)
    field = 'string';
  }

  const test = new Test();

  it('`field` roperty should update when new value is valid', function () {
    test.field = 'new string';

    expect(test.field).toEqual('new string');
  });

  it('`field` property should not update when new value is not valid', function () {
    test.field = 1;

    expect(test.field).not.toEqual(1);
  });
});
