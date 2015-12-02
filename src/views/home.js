var $ = require('jquery');
var Backbone = require('backbone');
var pageTemplate = require('../templates/home.hbs');
var productTileTemplate = require('../templates/product_tile.hbs')

// App
var App = require('../app')

// Collections
// var ProductCollection = require('../collections/product.js');
var FanCollection = require('../collections/fan.js')
var BulbCollection = require('../collections/bulb.js')


var HomeView = Backbone.View.extend({
	el: '.content',

	events: {
		'click .tile .choose': 'clickTile'
	},

	render: function() {
		// console.log('render home view')
		var result = pageTemplate()

		this.$el.html(result)

		var fanCollection = new FanCollection()
		fanCollection.fetch().done(function(fans) {
		
			// raw non-backbone array of objects
			var result = productTileTemplate(fans)
			$('.tiles.fans').html(result);
		})

		var bulbCollection = new BulbCollection()
		bulbCollection.fetch().done(function(bulbs) {
		
			// raw non-backbone array of objects
			var result = productTileTemplate(bulbs)
			$('.tiles.bulbs').html(result);

		})
	},

	clickTile: function(e) {
		
		// Go get any previously selected product's ID
		var p1Id = $('.tile.selected').data('id')

		// Select the current product
		var tile = $(e.target).parents('.tile')
		tile.toggleClass('selected')

		// Get the current product's ID
		var p2Id = tile.data('id');

		// console.log('a');
		if (p1Id && p2Id) {
			// console.log('b');
			App.appRouter.navigate('/compare/' + p1Id + '/' + p2Id ,{trigger: true})
		}


	}

})

module.exports = HomeView;