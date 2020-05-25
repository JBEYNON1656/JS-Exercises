function repeatString(stringText, iteration) {
	let returnString = '';
	if (iteration < 0) {returnString = 'ERROR'; return returnString;
		}
		else {
			let returnString = '';
			for (let i = 0; i < iteration; i++){
		     	returnString = returnString + stringText;
			}
			return returnString;
		}
}

module.exports = repeatString
