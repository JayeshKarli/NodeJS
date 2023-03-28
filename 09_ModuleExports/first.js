let addFn = require("./add").add;
let subtractFn = require("./add").subtract;

function greet(name) {
    console.log("Hello there, " + name + "!");
}

greet("Jayesh");
addFn(12, 33);
subtractFn(12, 33);