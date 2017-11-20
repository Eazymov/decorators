import { Freeze } from 'src';

describe('`Freeze` decorator', function () {

  @Freeze
  class Test {
    field = 1;
  }

  const test = new Test();

  it('property should be readonly', function () {
    const throwsError = () => {
      test.field = 2;
    };

    expect(throwsError).toThrowError();
  });
});
