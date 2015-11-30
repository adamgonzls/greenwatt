var Backbone = require('backbone');

var ProductModel = require('../models/product')

var BulbCollection = Backbone.Collection.extend({
	model: ProductModel,
	url: function() {
		return 'api/bulb'
	}
})

module.exports = BulbCollection;