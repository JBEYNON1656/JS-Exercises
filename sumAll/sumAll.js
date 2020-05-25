function sumAll(x, y) {
	
	if (typeof(x) != 'number' || typeof(y) != 'number') {return "ERROR"}
	if (x < 0 || y < 0) {return "ERROR"}


	let maxNum = Math.max(x, y);
	let minNum = Math.min(x, y);
	let finalSum = 0;
	let tempArray = [];

	for (i = minNum; i < (maxNum + 1); i++){
		tempArray.push(i)
	}

	for (i = 0; i < tempArray.length; i++){
		finalSum = finalSum + tempArray[i]
	}

return finalSum;

}

module.exports = sumAll
