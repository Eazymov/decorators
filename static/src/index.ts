
class Test {
  field = 123;

  method () {
    console.log('Fired');
  }
}

const test = new Test();
test.field = 321;
console.log(test.field);
test.method();
