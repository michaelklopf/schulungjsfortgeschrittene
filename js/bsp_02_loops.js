// Schleifen
console.log("bsp_02_loops.js");

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

// -----------------
// for-in Schleifen
// -----------------
var assozArray = {
    wert1: "Salami",
    wert2: "Käse"
};

console.log(assozArray);
for (var key in assozArray) {
    console.log(key, ":", assozArray[key]);
}

if (typeof  Object.prototype.clone === "undefined") {
    Object.prototype.clone = function() {};
}

// In folgender Ausgabe tauchen auch die durch prototype hinzugefuegten Eigenschaften auf
for (var key in assozArray) {
    console.log(key, ":", assozArray[key]);
}

// Hier filtern wir nur nach den gewuenschten Eigenschaften
for (var key in assozArray) {
    if (assozArray.hasOwnProperty(key)) {
        console.log(key, ":", assozArray[key]);
    }
}

// -----------------
// switch
// -----------------
var vergleichswert = 3;
var status = 0;

switch (vergleichswert) {
    case 0:
        console.log("Null");
        status = 300;
        break;
    case 1:
        console.log("Eins");
        status = 400;
        break;
    case 2:
        console.log("Zwei");
        status = 500;
        break;
    default:
        console.log("default");
        status = 0;
}
// Hier mit status weiterarbeiten, die cases schlank halten.

// -----------------
// if
// -----------------
if (vergleichswert > 3) {
    console.log("Ist groesser.");
} else {
    console.log("Ist kleiner.");
}

var v = vergleichswert < 1;

if (v) {
    //do something
}

if (vergleichswert == "3") {
    // Gibt true
}

if (vergleichswert == "3tes") {
    // Gibt false
}

// immer === verwenden
if (vergleichswert === 3) {
    // do something
}
