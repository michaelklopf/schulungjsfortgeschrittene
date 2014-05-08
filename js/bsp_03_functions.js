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

// Dies kann wie folgt unterbunden werden
var logSomethingElse = function() {
    console.log("somethingElse");
}; // man beachte das Semikolon

logSomethingElse();

