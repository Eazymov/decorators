const Benchmark = (target, prop, descriptor) => {
    const method = descriptor.value;
    const meter = (typeof performance !== 'undefined') ? performance : Date;
    descriptor.value = function () {
        const action = method.apply.bind(method, this, arguments);
        console.log('Performance before method call is: ' + meter.now());
        const result = action();
        console.log('Performance after method call is: ' + meter.now());
        return result;
    };
};
export default Benchmark;
