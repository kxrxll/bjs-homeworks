sleep = (milliseconds) => {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

sum = (...args) => {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

compareArrays = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every(function(value, index) { return value === arr2[index]});
}
/*
const memorize = (fn,limit) => {
    const results = {};
    return (...args) => {
        const argsKey = JSON.stringify(args);
        if (!results[argsKey]) {
            results[argsKey] = fn(...args);
        }
        if (results.length > limit) {
            results.splice(0, 1);
        }
        return results[argsKey];
    };
};
 */

memorize = (func, limit) => {
    const memoryArray = [];
    return (...arguments) => {
        const solutionObjectFromArray = memoryArray.find(item => {return compareArrays(item.args, arguments)});
        if (solutionObjectFromArray === undefined) {
            const computedResult = func(...arguments);
            memoryArray.push(
                {
                    args: arguments,
                    result: computedResult
                }
            );
            if (memoryArray.length > limit) {
                memoryArray.splice(0, 1);
            };
            return computedResult;
        }
        return solutionObjectFromArray.result;
    }
}


