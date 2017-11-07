const Extends = (...ancestors) => {
    return (target) => {
        let prototype = {};
        ancestors.forEach((ancestor) => {
            prototype = ancestor.prototype;
        });
    };
};
export default Extends;
