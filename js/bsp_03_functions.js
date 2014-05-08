// Funktionen
console.log("bsp_03_functions.js");

// Block scope
// Private variables
// Closures

// ----------------
// basics
// ----------------
// Beim Parsen des JS Scripts wird der Code zweimal durchlaufen. Erst die Suche nach Funktionen, dann die Ausfuehrung.

// Funktion kann aufgrund dieser Tatsache jederzeit gerufen werden
logSomething();

function logSomething() {
    console.log("something");
}

// Dies kann wie folgt unterbunden werden mit "Funktionsausdruck"
var logSomethingElse = function() {
    console.log("somethingElse");
}; // man beachte das Semikolon

logSomethingElse();

// ------------------
// Scope / Private / IIFE - Immediately-invoked function expression
// ------------------
var b = 5;

(function() {
    var a;  // Private
    if (true) { // if steht hier, weil vorher klargestellt werden soll, dass es keinen Scope bei if gibt
        a = 2;
        b = b + 2
    }
})();

// ----------------
// closure - der schlechte Teil
// ----------------
function getSomething() {
    'use strict';

    var a = "Something";

    var  getSomethingElse = function () {
        return a;
    };

    return getSomethingElse();
}

var something = getSomething();
console.log(something);

// ----------------
// closure - das ist besser
// ----------------
function assignHandler() {
    var element = document.getElementById("button1");
    var id = element.id;

    element.onclick = function() {
        console.log("id", id);
    };

    // Referenzen zuruecksetzen und Speicher freigeben
    element = null; // Der gute Teil
}

assignHandler();
