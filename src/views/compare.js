var $ = require('jquery');
var HighCharts = require('highcharts-browserify');
var Backbone = require('backbone');
var pageTemplate = require('../templates/compare.hbs');
// var chartTemplate = require('../product_compare_chart');

var CompareView = Backbone.View.extend({
	el: '.content',

	render: function(p1Id, p2Id) {
		var result = pageTemplate()

		this.$el.html(result)

		'api/product/compare' + p1Id + '/' + p2Id
		console.log(p1Id + 'hello');

		$.get('api/product/compare/' + p1Id + '/' + p2Id).then(function(data) {

			data[0].fan_watts






		})



		new Highcharts.Chart({
			chart: {
				renderTo: $('.product-comparison-chart')[0],
	            type: 'line'
	        },
	        title: {
	            text: 'Cost Over Time'
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
		


	}
})

module.exports = CompareView;

