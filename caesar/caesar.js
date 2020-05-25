const caesar = function(caesarWord, offset) {

upperAlphaArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
lowerAlphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
newString = "";

function alphaReset(indexFound, offset2){

	if ((indexFound + offset2) >= 26){
		let newIndex = ((indexFound + offset2) - 26);
		return newIndex;
	}
	else if ((indexFound + offset2) <= 0){
		let newIndex = ((indexFound + offset2) + 26);
		return newIndex;
	}

		else {return (indexFound + offset2)};
	
}


for (i=0; i < caesarWord.length; i++){

	if (caesarWord.charAt(i) === ' ' || caesarWord.charAt(i) === ',' || caesarWord.charAt(i) === '!'){newString += caesarWord.charAt(i)}

else{
	if (caesarWord.charAt(i) === caesarWord.charAt(i).toUpperCase()){
	indexFinder = upperAlphaArray.indexOf(caesarWord.charAt(i))
	newString += upperAlphaArray[alphaReset(indexFinder, offset)]
	}

	else {
	indexFinder = lowerAlphaArray.indexOf(caesarWord.charAt(i))
	newString += lowerAlphaArray[alphaReset(indexFinder, offset)]
		}
	}
}

return newString;
//console.log(newString)

}

caesar('A', 1)

module.exports = caesar
