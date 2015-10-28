// setup API router
var restful = require("node-restful");


function ClientAPIRoute(app) {

    // setup restful
    var rest = restful
        .model("Client", app.models.Client)
        .methods(["get", "put", "post", "delete"]);

    // register route and app with restful service
    rest.register(app, "/customers");

    // return the middleware
    return function(req, res, next) {
        next();
    };

}

module.exports = ClientAPIRoute;


