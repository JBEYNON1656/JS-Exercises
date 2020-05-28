const caesar = function(caesarWord, offset) {

upperAlphaArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //creates an arrray of all lowercase letters
lowerAlphaArray = 'abcdefghijklmnopqrstuvwxyz'.split(''); //creates an arrray of all uppercase letters
newString = "";

//Deals with instances where the offset will loop back through the alphabet
function alphaReset(indexFound, offset2){

let newNum = (indexFound + offset2)

if ((newNum) >= 26) {
		
		while (newNum >= 26){newNum -= 26}
		return (newNum)
	} 
	else if ((newNum) < 0) {
		
		while (newNum < 0){newNum += 26}
		return (newNum)
	}
	else {return newNum}
	} 


for (i=0; i < caesarWord.length; i++){

	if (caesarWord.charAt(i) === ' ' || 
		caesarWord.charAt(i) === ',' || 
		caesarWord.charAt(i) === '!'){newString += caesarWord.charAt(i)} //Checks to see if the character is not a letter, to ignore it

else{
	if (caesarWord.charAt(i) == caesarWord.charAt(i).toUpperCase()){ //Checks if the letter is uppercase
	indexFinder = upperAlphaArray.indexOf(caesarWord.charAt(i))
	newString += upperAlphaArray[alphaReset(indexFinder, offset)]
	}

	else {
	indexFinder = lowerAlphaArray.indexOf(caesarWord.charAt(i)) //checks if the letter is lowercase
	newString += lowerAlphaArray[alphaReset(indexFinder, offset)]
		}
	}
}

return newString;
//console.log(newString)

}


module.exports = caesar
