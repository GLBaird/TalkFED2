// setup API router
var restful = require("node-restful");


function ProductAPIRoute(app) {

    // setup restful
    var rest = restful
        .model("Product", app.models.Product)
        .methods(["get", "put", "post", "delete"]);

    // register route and app with restful service
    rest.register(app, "/products");

    // return the middleware
    return function(req, res, next) {
        next();
    };

}

module.exports = ProductAPIRoute;


