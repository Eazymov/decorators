
const Readonly = (target: Target, property: Property, descriptor: Descriptor) => {
  descriptor.readonly = true;
}

export {
  Readonly,
};
