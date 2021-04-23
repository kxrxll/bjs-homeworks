function sleep(milliseconds)
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function(value, index) { return value === arr2[index]});
}

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