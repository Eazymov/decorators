
const Readonly = (target: any, prop: any, desc: any) => {
  desc.writable = false;
}

export {
  Readonly,
};
