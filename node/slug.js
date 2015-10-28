var greeting = "Hi from the slug and lettuce";

function sayGreeting() {
    console.log("***** HI ******");
    console.log(greeting);
}

function updateGreeting(value) {
    greeting = value;
}


module.exports = {
    doGreeting: sayGreeting,
    update: updateGreeting
};