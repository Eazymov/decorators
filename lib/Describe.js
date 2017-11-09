import { forEach } from '@eazymov/utils';
const Describe = (newDescriptor) => {
    return (target, prop, descriptor = {}) => {
        const changedKeys = Object.keys(newDescriptor);
        forEach(changedKeys, (key) => {
            descriptor[key] = newDescriptor[key];
        });
    };
};
export default Describe;
