var Backbone = require('backbone');

var ProductModel = require('../models/product')

var FanCollection = Backbone.Collection.extend({
	model: ProductModel,
	url: function() {
		return 'api/fan'
	}
})

module.exports = FanCollection;