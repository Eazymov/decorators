import { Readonly, Freeze, Seal, Mixin } from 'package';

class ReadonlyTest {

  @Readonly field = 123;

  @Readonly method () {
    /* ... */
  }
}

new ReadonlyTest();

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
