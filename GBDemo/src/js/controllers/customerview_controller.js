var CustomerViewController = {

    name: "CustomerViewController",
    html: "js/views/customerview_view.html",
    controller: [
        "$scope", "$http",
        function ($scope, $http) {
            console.log("CustomerView is Running!");
        }
    ]

};

module.exports = CustomerViewController;