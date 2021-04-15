String.prototype.isPalindrome = function () {
    let original = this.split("").filter(letter => letter != " ").join("").toLowerCase();
    let reverse = original.split("").filter(letter => letter != " ").reverse().join("").toLowerCase();
    if (original === reverse) {
        return true;
    } else {
        return false;
    }
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0 ; i < marks.length ; i++) {
       sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(date) {
    let verdict = false;
    const now = Date.now();
    const birthday = Date.parse(date);
    const diff = now - birthday;
    const age = diff / 31557600000;
    if (age > 18) {
        verdict = true;
    }
    return verdict;
}