import { Readonly } from 'package';

describe('`Readonly` decorator', function () {

  class Test {

    @Readonly field = 1;
  }

  const test = new Test();

  it('property `field` should be readonly', function () {
    const throwsError = () => {
      test.field = 2;
    };

    expect(throwsError).toThrowError();
  })
});
