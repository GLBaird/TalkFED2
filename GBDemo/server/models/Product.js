/**
 * Mongoose Schema - Product
 * MODEL Class
 *
 */
var schema = require("mongoose").Schema;

var Product = new schema({
    prop1:   { type: String, required: true },
    prop2:   { type: String, required: true }
});

module.exports = Product;