var fs = require("fs");

var information = "Hello from node\nThis is some text!!";
var path = "./demo.txt";
fs.writeFileSync(path, information);

if (fs.existsSync(path)) {
    console.log("Worked");
} else {
    console.log("Broken!");
}