import { Readonly } from 'package';

class Test {

  @Readonly field = 123;

  @Readonly method () {
    console.log('Fired');
  }
}

const test = new Test();

console.log(test);
