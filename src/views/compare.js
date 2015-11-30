var $ = require('jquery');
var HighCharts = require('highcharts-browserify');
var Backbone = require('backbone');
var pageTemplate = require('../templates/compare.hbs');
// var chartTemplate = require('../product_compare_chart');

var CompareView = Backbone.View.extend({
	el: '.content',

	render: function() {
		var result = pageTemplate()

		this.$el.html(result)

		console.log('before chart');


		new Highcharts.Chart({
			chart: {
				renderTo: $('.product-comparison-chart')[0],
	            type: 'line'
	        },
	        title: {
	            text: 'Energy Cost'
	        },
	        xAxis: {
	            categories: ['Purchase Date', 'Year 3']
	        },
	        yAxis: {
	            title: {
	                text: 'Initial Cost'
	            }
	        },
	        series: [{
	            name: 'Product 1',
	            data: [200, 500]
	        }, {
	            name: 'Product 2',
	            data: [300, 450]
	        }]
		})
		

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