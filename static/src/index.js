import { Readonly, SuppressErrors, Once } from 'package';

class Test {
  field = 123;

  @SuppressErrors
  method (a, b) {
    console.log(a, b);
    throw new Error('Lol');
  }

  @Once
  once () {
    console.log('Fired');
  }
}

const test = new Test();

test.method(1, 2);
test.once();
test.once();
