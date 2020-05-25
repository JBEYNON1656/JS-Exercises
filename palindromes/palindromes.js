let palindromes = function(palinPhrase) {

	let ppNoPunch = palinPhrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '')

	let palinArray = [];
	let reveString = "";

	for (i = ppNoPunch.length - 1; i >= 0 ; i--){
		palinArray.push(ppNoPunch.charAt(i))
	}

	for (i = 0; i < palinArray.length; i++){
		reveString = reveString + palinArray[i]
	}

//console.log(palinArray)
//console.log(ppNoPunch.toLowerCase())
//console.log(reveString.toLowerCase())

 	if (reveString.toLowerCase() === ppNoPunch.toLowerCase()) {return true}
 		else {return false;}
} 



palindromes("Animal loots foliated detail of stool lamina.")


module.exports = palindromes
