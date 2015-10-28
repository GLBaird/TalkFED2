// setup API router
var restful = require("node-restful");


function UserAPIRoute(app) {

    // setup restful
    var rest = restful
        .model("User", app.models.User)
        .methods(["get", "put", "post", "delete"]);

    // register route and app with restful service
    rest.register(app, "/users");

    // return the middleware
    return function(req, res, next) {
        next();
    };

}

module.exports = UserAPIRoute;


