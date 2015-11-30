var $ = require('jquery');
// var Highcharts = require('highcharts-release');
var Backbone = require('backbone');
var pageTemplate = require('../templates/compare.hbs');
// var chartTemplate = require('../product_compare_chart');

var CompareView = Backbone.View.extend({
	el: '.content',

	render: function() {
		var result = pageTemplate()

		this.$el.html(result)

		// var chartTemplate = new ChartTemplate()
		// chartTemplate.fetch().done(function(chart) {
	
		// // raw non-backbone array of objects
		// console.log('got to charts');
		// var result = pageTemplate(chart)
		// $('.product-comparison-chart').html(result);

		// })
	}
})

module.exports = CompareView;


// chart div   .product-comparison-chart