// TESTS for CustomerViewController

// load app and all frameworks with require
var app = require("../src/js/app");

// Define unit test for controller
describe("CustomerViewController Tests", function() {

    console.log("Testing CustomerViewController");

    // load app module through mocks
    beforeEach(angular.mock.module("GBDemo"));

    var $controller, $rootScope;

    // define $controller by getting mocks to inject code into our variable
    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope  = _$rootScope_;
    }));

    // test $scope with this controller
    describe("Tests - setup", function() {

        // holding objects for $scope, DemoService and controller
        var $scope, customService, controller;

        // setup objects for each test
        beforeEach(function() {

            // fake object for scope testing (can also use $rootScope.new()
            // with Mocks to make a legit scope object!)
            $scope = $rootScope.$new();

            // make a fake service
            customService = {
                functionName: function() {
                    /* fake function  */
                }
            };

            // setup spy on service
            spyOn(customService, "functionName");

            // setup CustomerViewController and pass it the fake objects
            controller = $controller("CustomerViewController", {$scope: $scope, Service: customService});

        });

        it("Should load the CustomerViewController", function(){
            expect(controller).toBeDefined();
        });

        it("Should call the Service 'functionName' method", function() {
            // test commented out as service does not call this code in template
            // but demonstrates how to test a service call.

            // expect(customService.functionName).toHaveBeenCalled();
        });

        // write more tests

    });

});