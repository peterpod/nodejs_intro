// point will be a class defined in the point.js module
var car = require("./Car.js");

var Mercedes = new car('Mercedes', 45000, 2002);
// returns json of this class
var car_json = JSON.stringify(Mercedes);

console.log("The color of our Mercedes is  "+ Mercedes.color);
console.log("Let me tell you about our car. We have a "+ Mercedes.getCarInfo());