module.exports = {

	day: 24,
	month: 30,
	year: 365,

	// Monthly kWhCost
	monthCost: monthCost = function(watts, kWhCost) {	
		return ((((watts / 1000) * kWhCost) * this.day) * this.month);
	},

	// Yearly kWhCost
	yearCost: yearCost = function(watts, kWhCost) {
		return ((((watts / 1000) * kWhCost) * this.day) * this.year);
	}

}