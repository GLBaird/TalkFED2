var DataManager = [
    "$http",
    function($http) {
        console.log("Service DataManager is running");

        function doSomething() {
            console.log("Doing something...");
        }

        // Expose public apis
        return {
            do: doSomething
        }
    }
];

module.exports = DataManager;