const Readonly = (target, prop, desc = {}) => {
    desc.writable = false;
};
export default Readonly;