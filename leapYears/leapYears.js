function leapYears(yearVar) {
	if (yearVar % 400 === 0) {return true}
		else if (yearVar % 100 === 0) {return false}
			else if (yearVar % 4 === 0) {return true}
				else {return false}

}

module.exports = leapYears
