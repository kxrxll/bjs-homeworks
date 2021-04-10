const getSolutions = (a, b, c) => {
    let result;
    let x1;
    let x2;
    const D = b ** 2 - 4 * a * c;
    if (D < 0) {
        result = {
            D: D,
            roots: []
        }
    } else if (D === 0) {
        x1 = -b / (2 * a);
        result = {
            D: D,
            roots: [x1]
        }
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        result = {
            D: D,
            roots: [x1, x2]
        }
    }
    return result;
}

const showSolutionsMessage = (a, b, c) => {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

const getAverageScore = (data) => {
    let result = data;
    let averageMark;
    let marksSum = 0;
    for (let key in data) {
        averageMark = getAverageMark(data[key]);
        result[key] = averageMark;
        marksSum += averageMark;
    }
    if (Object.keys(data).length === 0) {
        result['average'] = 0;
    } else {
        result['average'] = marksSum / Object.keys(data).length;
    }
    return result;
}

const getAverageMark = (marks) => {
    let estimationSum = 0;
    let estimationAverage;
    for (let i = 0; i < marks.length; i++) {
        estimationSum += marks[i];
    }
    estimationAverage = estimationSum / marks.length;
    if (marks.length === 0) {
        estimationAverage = 0;
    }
    return estimationAverage;
}

const getPersonData = (secretData) => {
    return {
        firstName: getDecodedValue(secretData['aaa']),
        lastName: getDecodedValue(secretData['bbb'])
    }
}

const getDecodedValue = (secret) => {
    switch (secret) {
        case 0: return 'Родриго';
        break;
        case 1: return 'Эмильо'
        break;
    }
}
