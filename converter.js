/*
var baseCurrencyUs = 26.6;

function roundTwoDecimals(amount) {
	return Math.round(amount * 100) / 100;
}

module.exports.convertToUa = function (currency) {
	console.log(roundTwoDecimals(currency * baseCurrencyUs));
}

module.exports.convertToUs = function (currency) {
	console.log(roundTwoDecimals(currency / baseCurrencyUs));
}
*/

var Converter = function (baseCurrencyUs){
	this.baseCurrencyUs = baseCurrencyUs;
};
Converter.prototype.roundTwoDecimals = function (amount) {
	return Math.round(amount * 100) / 100;
		
};
Converter.prototype.convertToUa = function (currency) {
	return this.roundTwoDecimals(currency * this.baseCurrencyUs)
		
}



module.exports = Converter;