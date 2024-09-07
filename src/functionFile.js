"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeUser = welcomeUser;
function welcomeMessage1() {
    console.log("It is a pleassureto welcome youto our terminal shop!");
}
function welcomeMessage2() {
    console.log("Please exit the shop by inputting \"Quit\"  ");
}
function welcomeMessage3() {
    console.log("You will find a list of items available to purchase below ");
}
function lineForText1() {
    console.log("---------------------------------------------------");
}
function lineForText2() {
    console.log(" ");
    console.log("---------------------------------------------------");
    console.log(" ");
}
function welcomeUser() {
    console.log(' ');
    welcomeMessage1();
    welcomeMessage2();
    welcomeMessage3();
    lineForText1();
}
