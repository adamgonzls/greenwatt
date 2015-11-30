var $ = require('jquery');
var Backbone = require('backbone');
var pageTemplate = require('../templates/about.hbs');

var AboutView = Backbone.View.extend({
	el: '.content',

	render: function() {
		var result = pageTemplate()

		this.$el.html(result)
	}
})

module.exports = AboutView;