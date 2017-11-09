import { Describe } from 'package';

class Test {

  field = 123;

  @Describe({
    writable: false,
  })
  method () {
    
  }
}

const test = new Test();

console.log(test.method);
