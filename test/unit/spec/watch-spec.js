import { Watch } from 'package';

describe('`Watch` decorator:', function () {
  
  let called = false;

  class Test {

    @Watch(() => {
      called = true;
    })
    field = 1;
  }

  const test = new Test();

  it('`watcher` function should be called when `field` property changes', function () {
    test.field = 2;

    expect(called).toBeTruthy();
  });
});
