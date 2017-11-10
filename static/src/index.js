import { Benchmark } from 'package';

class Test {

  field = 123;

  @Benchmark
  method (a, b) {
    console.log(this, a, b);
    return new Array(10000000);
  }
}

const test = new Test();

test.method(1, 2);
