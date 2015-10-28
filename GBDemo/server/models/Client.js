/**
 * Mongoose Schema - Client
 * MODEL Class
 *
 */
var schema = require("mongoose").Schema;

var Client = new schema({
    prop1:   { type: String, required: true },
    prop2:   { type: String, required: true }
});

module.exports = Client;