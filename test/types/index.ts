import {
  Benchmark,
  Describe,
  Freeze,
  Mixin,
  Readonly,
  Seal,
  SuppressErrors,
  Validate,
  Watch,
} from 'package';

class Main {

  @Readonly readonlyField = 123;

  @Readonly readonlyMethod () {
    /* ... */
  }
  
  @Benchmark benchmark () {
    /* ... */
  }
  
  @SuppressErrors noErrors () {
    /* ... */
  }

  @Describe({
    writable: false,
    enumerable: false,
    configurable: false,
    value: {},
  })
  describedProperty = null;

  @Validate(() => true)
  validateField = 123;

  @Validate(() => false)
  validateMethod () {
    /* ... */
  }

  @Watch(console.log)
  watchField = 123;

  @Watch(console.log)
  watchMethod () {
    /* ... */
  }
}

new Main();

@Freeze
class FreezeTest { }

new FreezeTest();

@Seal
class SealTest { }

new SealTest();

@Mixin({
  method () {
    /* ... */
  },
})
class MixinTest { }

new MixinTest();
