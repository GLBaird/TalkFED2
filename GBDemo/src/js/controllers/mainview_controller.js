var MainViewController = {

    name: "MainViewController",
    html: "js/views/mainview_view.html",
    controller: [
        "$scope", "$http",
        function ($scope, $http) {
            console.log("MainView is Running!");
        }
    ]

};

module.exports = MainViewController;