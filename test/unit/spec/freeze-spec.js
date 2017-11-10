import { Freeze } from 'package';

describe('`Freeze` decorator:', function () {

  @Freeze
  class Test {
    field = 1;
  }

  const test = new Test();

  it('property `field` should be readonly', function () {
    const throwsError = () => {
      test.field = 2;
    };

    expect(throwsError).toThrowError();
  });
});
