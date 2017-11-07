import { Decorator } from 'types';

const Readonly: Decorator = (
  target: Object,
  prop: PropertyKey,
  desc: PropertyDescriptor = {}
) => {
  desc.writable = false;
}

export default Readonly;
