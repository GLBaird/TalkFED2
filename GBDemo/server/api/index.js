// API Route Registry
var api = {

	users: require("./users"),

	customers: require("./customers"),

	products: require("./products")

};

module.exports = api;