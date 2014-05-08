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

// Besseres Pattern
var i;
var max;

for (i = 0, max = myArray.length; i < max; i++) {
    console.log(myArray[i]);
}