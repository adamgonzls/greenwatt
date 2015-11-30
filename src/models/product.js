var Backbone = require('backbone');

var ProductModel = Backbone.Model.extend({

	url: function() {

		console.log('url in product model')
		return '/api/product/' + this.product_id
	}
	
})

module.exports = ProductModel;