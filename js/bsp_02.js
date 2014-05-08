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

// der Klassische for-Schleifen Durchlauf ist unperformant und ein suboptimales Pattern

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
for (i=myArray.length; i--;) {   // dies wird von JSLint bemängelt
    console.log(myArray[i]);
}

// Alternative, die aber nicht will. Der Iterator hat die Werte 2,1 aber bei myArray[2]
// erhalten wir undefined
for (i=myArray.length; i -= 1;) {
    console.log(myArray[i]);
}

// So geht es aber, ist dies jedoch performanter?
for (i=myArray.length; i > 0; i -= 1) {
    console.log(myArray[i-1]);
}

// for-in Schleifen
var assozArray = {
    wert1: "Salami",
    wert2: "Käse"
};

console.log(assozArray);
for (var key in assozArray) {
    console.log(key, ":", assozArray[key]);
}
