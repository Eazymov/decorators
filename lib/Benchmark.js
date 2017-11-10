const Benchmark = (target, prop, descriptor) => {
    const method = descriptor.value;
    if (typeof window !== 'undefined') {
        descriptor.value = function () {
            const action = method.apply.bind(method, this, arguments);
            console.log('Performance before method call is: ' + performance.now());
            const result = action();
            console.log('Performance after method call is: ' + performance.now());
            return result;
        };
    }
    else {
        /* ONLY FOR TEST PURPOSE */
        descriptor.value = function () {
            const action = method.apply.bind(method, this, arguments);
            const result = action();
            return result;
        };
    }
};
export default Benchmark;
