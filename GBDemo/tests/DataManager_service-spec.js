// TESTS for DataManager

// load app and all frameworks with require
var app = require("../src/js/app");

// Define unit test for controller
describe("DataManager Tests", function() {

    console.log("Testing DataManager");

    // load app module through mocks
    beforeEach(angular.mock.module("GBDemo"));

    var DataManager;

    // define $service by getting mocks to inject code into our variable
    beforeEach(inject(function(_DataManager_) {
        DataManager = _DataManager_;
    }));

    // test service
    describe("A set of tests", function() {

        it("Should load the service", function(){
            expect(DataManager).toBeDefined();
        });

        it("Should perform some other test", function() {
            // test code
        });

        // write more tests

    });

});