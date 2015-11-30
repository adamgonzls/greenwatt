var $ = require('jquery');
var Backbone = require('backbone');
var pageTemplate = require('../templates/home.hbs');
var productTileTemplate = require('../templates/product_tile.hbs')

// Collections
// var ProductCollection = require('../collections/product.js');
var FanCollection = require('../collections/fan.js')
var BulbCollection = require('../collections/bulb.js')


var HomeView = Backbone.View.extend({
	el: '.content',

	render: function() {
		// console.log('render home view')
		var result = pageTemplate()

		this.$el.html(result)

		// var productCollection = new ProductCollection()
		// productCollection.fetch().done(function(products) {
			
		// 	// raw non-backbone array of objects
		// 	console.log(products);
		// 	var result = productTileTemplate(products)
		// 	$('.tiles').html(result);

		var fanCollection = new FanCollection()
		fanCollection.fetch().done(function(fans) {
		
			// raw non-backbone array of objects
			console.log('got to fans');
			var result = productTileTemplate(fans)
			$('.tiles.fans').html(result);

		//******turn off for now -ask kevin and brad****
		// var bulbCollection = new BulbCollection()
		// bulbCollection.fetch().done(function(bulbs) {
		
		// 	// raw non-backbone array of objects
		// 	console.log(bulbs);
		// 	var result = productTileTemplate(bulbs)
		// 	$('.tiles.bulbs').html(result);


		})

	}
})

module.exports = HomeView;