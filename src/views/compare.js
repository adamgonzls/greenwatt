var $ = require('jquery');
var HighCharts = require('highcharts-browserify');
var Backbone = require('backbone');
var calc = require('../utilities/calculations');
var pageTemplate = require('../templates/compare.hbs');



var CompareView = Backbone.View.extend({
	el: '.content',

	render: function(p1Id, p2Id) {
		var result = pageTemplate()

		this.$el.html(result);

		$(window).scrollTop(0); //Get approval from kevin/brad on scroll to top fix

		$.get('/api/product/compare/' + p1Id + '/' + p2Id).then(function(data) {
			
			$.get('/api/product/' + p1Id + '/image').then(function(image) {
				console.log(image)
				$('.compare-image1').css({'background-image': 'url(/images/' + image + ')', 
					'box-shadow': '0 0 1px 1px #84c12d'});
			})
			
			$.get('/api/product/' + p2Id + '/image').then(function(image) {
				console.log(image)
				$('.compare-image2').css({'background-image': 'url(/images/' + image + ')', 
					'box-shadow': '0 0 1px 1px #0399D3'});
			})
		
		var kWhCost = 0.1293;
		//http://www.eia.gov/electricity/monthly/update/end_use.cfm#tabs_temps-2
		console.log(data[0], data[1]);
		console.log(calc.yearCost);
		
		$('.compare-image1').append(data[0].model);
		$('.compare-image2').append(data[1].model);
		$('.brand1').text(data[0].brand_id);
		$('.brand2').text(data[1].brand_id);
		$('.model1').text(data[0].model);
		$('.model2').text(data[1].model);
		$('.price1').text('$' + data[0].price);
		$('.price2').text('$' + data[1].price);
		$('.watts1').text(data[0].watts);
		$('.watts2').text(data[1].watts);
		$('.eCost1').text('$' + calc.yearCost(data[0].watts, kWhCost).toFixed(2));
		$('.eCost2').text('$' + calc.yearCost(data[1].watts, kWhCost).toFixed(2));
		// $('.width1').text(data[0].width);
		// $('.width2').text(data[1].width);
		$('.airflow1').text(data[0].airflow);
		$('.airflow2').text(data[1].airflow);
		$('.thermostat1').text(data[0].thermostat);
		$('.thermostat2').text(data[1].thermostat);
		$('.remote1').text(data[0].remote);
		$('.remote2').text(data[1].remote);

		// $('.compare-details tr').hover(
		// 	function () {
		//     	$(this).css("background","yellow");
		// }, 
		// 	function () {
		//     	$(this).css("background","");
		// 	}
		// );
		
		$('.compare-details tr').hover
			(function () {
				$(this).addClass('highlight');
		},
			function () {
				$(this).removeClass('highlight');
			}
		);	

			Highcharts.setOptions({
		        colors: ['#84c12d', '#0399D3']
		    });

			new Highcharts.Chart({
				chart: {
					renderTo: $('.product-comparison-chart')[0],
		            type: 'line'
		        },
		        title: {
		            text: 'Initial Cost + Cumulative Energy Cost'
		        },
		        xAxis: {
		            // floor: .5,
		            // ceiling: 9,
		            // type: 'datetime',
		            categories: ['Time of Purchase','Year 3','Year 5','Year 10']
		        },
		        tooltip: {
		            valueDecimals: 2,
		            valuePrefix: '$',
		            valueSuffix: ' USD'
		        },
		        yAxis: {
		            floor: 0,
		            ceiling: 800,
		            gridLineColor: '#d9d9d9',
		            title: {
		                text: 'Cost'
		            },
		            tickInterval: 100
		        },
		        series: [{
		            name: data[0].model,
		            data: [	
	            		data[0].price, 
	            		(calc.yearCost(data[0].watts, kWhCost) * 3) + data[0].price,
	            		(calc.yearCost(data[0].watts, kWhCost) * 5) + data[0].price,
	            		(calc.yearCost(data[0].watts, kWhCost) * 10) + data[0].price,
	            		]
		        }, 
		        {
		            name: data[1].model,
		            data: [
		            	data[1].price, 
		            	(calc.yearCost(data[1].watts, kWhCost) * 3) + data[1].price,
		            	(calc.yearCost(data[1].watts, kWhCost) * 5) + data[1].price,
		            	(calc.yearCost(data[1].watts, kWhCost) * 10) + data[1].price,
		            	]
		        }]
			})

		})

	}
})

module.exports = CompareView;

