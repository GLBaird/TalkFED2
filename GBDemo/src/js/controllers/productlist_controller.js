var ProductListController = {

    name: "ProductListController",
    html: "js/views/productlist_view.html",
    controller: [
        "$scope", "$http",
        function ($scope, $http) {
            console.log("ProductList is Running!");
        }
    ]

};

module.exports = ProductListController;