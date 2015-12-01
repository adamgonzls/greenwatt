// Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('hbsfy/runtime');

// App
var App = require('./app')


// Views
var HomeView = require('./views/home.js');
var homeView = new HomeView();

var AboutView = require('./views/about.js');
var aboutView = new AboutView();

var CompareView = require('./views/compare.js');
var compareView = new CompareView();

var ProductProfileView = require('./views/product-profile.js');
var productProfileView = new ProductProfileView();


$(function() {

	var AppRouter = Backbone.Router.extend({
	    
	    routes: {
	    	'(/)': 'index',
	    	'about(/)': 'about',
	    	'compare/:p1Id/:p2Id(/)': 'compare',
	        // 'add-product(/)': 'addProduct',
	        'product/:id(/)': 'productProfile',
	        '*actions': 'defaultRoute'
	    },

	    index: function() {
	    	homeView.render();
	    },

	    about: function() {
	    	aboutView.render();
	    },

	    compare: function(p1Id, p2Id) {
	    	compareView.render(p1Id, p2Id);
	    },

	    // addProduct: function() {
	    // 	console.log('Add Product');
	    // },

	    productProfile: function(id) {
	    	productProfileView.render(id);
	    },

	    defaultRoute: function() {
	    	console.log('404');
	    }


	});

	// Instantiate the router
	App.appRouter = new AppRouter;

	// Start Backbone history a necessary step for bookmarkable URL's
	Backbone.history.start();




})