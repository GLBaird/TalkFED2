var routes = function($routeProvider) {

    $routeProvider
		.when("/mainview", {
			templateUrl: "js/views/mainview_view.html",
			controller: "MainViewController"
		})

		.when("/customerview", {
			templateUrl: "js/views/customerview_view.html",
			controller: "CustomerViewController"
		})

		.when("/productlist", {
			templateUrl: "js/views/productlist_view.html",
			controller: "ProductListController"
		})

		.otherwise({
			redirectTo: "/mainview"
		})


};

module.exports = routes;
