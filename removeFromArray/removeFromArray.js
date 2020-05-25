function removeFromArray(arrayToRemoveFrom, ...removalItems) {
	
	for (j = 0; j < removalItems.length; j++){
		let removalItem = removalItems[j]
	
	for (i = 0; i < arrayToRemoveFrom.length; i++) {
		if (arrayToRemoveFrom[i] === removalItem) {arrayToRemoveFrom.splice(i, 1)}

	}
}
	return arrayToRemoveFrom;
}

module.exports = removeFromArray
