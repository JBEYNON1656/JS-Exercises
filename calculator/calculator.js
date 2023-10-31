function subtract (x , y) {
	return x - y;
}

function sum (arrayToSum) {
	let total = 0;
	for (i = 0; i < arrayToSum.length; i++){
		total = total + arrayToSum[i]
	}
	return total;
}

function multiply (arrayToMult) {
	let total = 1;
	for (i = 0; i < arrayToMult.length; i++){
		total = total * arrayToMult[i]
	}
	return total;
}

function power() {
	let total = arguments[0];
	for (i = 1; i < arguments.length; i++){
		total = total ** arguments[i]
	}
	return total;
}

function factorial(n) {
	if (n === 0){return 1} 
		else {
	  return (n != 1) ? n * factorial(n - 1) : 1;

	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
