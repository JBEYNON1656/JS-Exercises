const ftoc = function(f) {
	let newC = (f-32)*0.55555555555;
	return Math.round(newC * 10) / 10;

}

const ctof = function(c) {
	let newF = (c*1.8) + 32;
	return Math.round(newF * 10) / 10;

}

module.exports = {
  ftoc,
  ctof
}
