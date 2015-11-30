var $ = require('jquery');
var Backbone = require('backbone');
var pageTemplate = require('../templates/product_tile.hbs');

//Models
var ProductModel = require('../models/product')


var ProductProfileView = Backbone.View.extend({
	
	el: '.content',

	render: function(product_id) {
		var _this = this

		var productModel = new ProductModel({id: product_id})
		productModel.fetch().done(function(product){
			var result = pageTemplate(product[0])
		 	_this.$el.html(result)
		})
		

	}
})

module.exports = ProductProfileView;




