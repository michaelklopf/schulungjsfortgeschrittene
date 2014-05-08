// Schleifen
console.log("bsp_02.js");

var myArray = [
    "Wert 1",
    "Wert 2"
];

console.log(myArray);

for (var i = 0; i < myArray.length; i++ ) {
    console.log(myArray[i]);
}

// der klassische for schleifen Durchlauf ist unperformant und ein suboptimales Pattern

// ----------------
// Besseres Pattern
// ----------------
var i; // Iterator
var max; // Arraylaenge

// Das setzen der Werte geschieht initial einmal,
// die Abfrage auf die Laenge bei jedem Durchlauf,
// als auch die Inkrementation
for (i = 0, max = myArray.length; i < max; i++) {
    console.log(myArray[i]);
}

// ----------------
// Noch besseres Pattern
// ----------------
var i; // Iterator

// noch performanter
for (i=myArray.length;i--;) {
    console.log(myArray[i]);
}

