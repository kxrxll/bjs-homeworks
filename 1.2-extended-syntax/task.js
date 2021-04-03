function getResult (a, b, c) {
  "use strict";
  const D = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  let result;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    result = [x1, x2];
  } else if (D === 0) {
    x1 = -b / 2 * a;
    result = [x1];
  } else {
    result = [];
  };
  return result;
};

function getAverageMark (marks) {
  let result;
  if (marks.length > 4) {
    marks.splice(5);
    console.log("More than 5 marks, sliced to 5");
  };
  if (marks.length === 0) {
    result = 0;
  } else {
    let sumOfMarks = 0;
    for ( i = 0 ; i < marks.length ; i++) {
    sumOfMarks += marks[i];
    };
    result = sumOfMarks / marks.length;
  };
  return result;
};

function askDrink(name,dateOfBirthday){
    const actualYear = new Date().getFullYear();
    const age = actualYear - dateOfBirthday.getFullYear();
    let result;
    if (age >= 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    };
    return result;
}
