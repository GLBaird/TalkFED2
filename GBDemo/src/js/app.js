// Angular Appliation Bootstrap File
// GBDemo

var controllers = require("./controllers");

// Define Angular Module
var app = angular
	.module("GBDemo", ["ngRoute"])

	// Load Factories
	.factory( "DataManager", require("./services/DataManager-factory") )

	// Load Services

	// Load Controllers
	.controller( "MainViewController", controllers.MainViewController.controller )
	.controller( "CustomerViewController", controllers.CustomerViewController.controller )
	.controller( "ProductListController", controllers.ProductListController.controller )

	// Load API Models and Routes
	.config(["$routeProvider", require("./routes")]);

module.exports = app;