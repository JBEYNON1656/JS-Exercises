function reverseString(stringToReverse) {
	stringArray = [];
	finalString = '';
	for (let i = 0; i < stringToReverse.length; i++){
		stringArray.push(stringToReverse.charAt(i))
	}
    for (let i = 1; i < stringArray.length + 1; i++){
    	finalString = finalString + stringArray[stringArray.length - i];
    }
    return finalString;
}

module.exports = reverseString
