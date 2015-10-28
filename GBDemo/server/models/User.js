/**
 * Mongoose Schema - User
 * MODEL Class
 *
 */
var schema = require("mongoose").Schema;

var User = new schema({
    prop1:   { type: String, required: true },
    prop2:   { type: String, required: true }
});

module.exports = User;