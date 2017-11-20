import { Readonly } from 'src';

describe('`Readonly` decorator', function () {

  class Test {

    @Readonly field = 1;
  }

  const test = new Test();

  it('property should be readonly', function () {
    const throwsError = () => {
      test.field = 2;
    };

    expect(throwsError).toThrowError();
  });
});
