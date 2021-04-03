function averageMark(a, g, p) {
	let algebra;
	let geography;
	let physics;
	algebra = a;
	geography = g;
	physics = p;
	const averageEstimation = (algebra + geography + physics)/3;
	return averageEstimation;
}

function sayHello(userName) {
	const myName = userName;
    const message = `Привет, мир! Меня зовут ${myName}`
	return message;
}

function calculateFormula() {
	let x = 2;
	let y = 22;
	let z = 0;
	let result = x * y + 5 * z + x - 1;
    return result;
}