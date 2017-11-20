import { Seal } from 'package';

describe('`Seal` decorator', function () {

  @Seal
  class Test {
    field = 1;
  }

  const test = new Test();

  it('instance should not be extensible', function () {
    const throwsError = () => {
      test.anotherField = 2;
    };

    expect(throwsError).toThrowError();
  });
});
