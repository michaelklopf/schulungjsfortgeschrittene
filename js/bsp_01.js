// JS Basics
console.log("bsp_01.js");

// jshint for code analysis
// jslint is the harder version

// Coding Pattern
// Design Pattern
// Anti Pattern

function useDaStrict() {
    'use strict';
}

a = "hallo";
console.log(window.a);

var global_one = 1;
global_two = 2;

delete global_one;
delete global_two;

console.log(typeof global_one); // Does not work; global_one kein Member von window
console.log(typeof global_two);

function getContext() {
    return this;
}

var globalContext = getContext();
console.log(globalContext);

var value1 = 5;
var value2 = 6;

var addValues = function(value1, value2) {
    return this.value1 + this.value2;
}

console.log(addValues(1, 3)); // wirft 11

function machWas() {
    //var a = b = 1; //Implizite Globale
    var a = 1, b = 1;

    var iterator = 0,
        name = "Peter";
}
machWas();

console.log("a: ", a);
// console.log("b: ", b);

var global_three = 3;

//Hoisting - hochziehen der JS Files
function machWasAnderes() {
    // Hier steht implizit var global_three;
    console.log(global_three);
    var global_three = 5;
    console.log(global_three);
}

machWasAnderes();

// Die Dokumentation mit /* sollte unterlassen werden,
// da sie zu Fehlern beim Auskommentieren von Code führen kann

// Blockt ein Skript den Browser, packe es in einen Web Worker
