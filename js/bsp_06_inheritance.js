// Inheritance
console.log("bsp_06_inheritance.js");

// has-a Beziehung: siehe zB die Projekte die zu einer Person gehoeren

// is-a Beziehung:
var Fahrzeug = function(achsen) {
  this.achsen = achsen;
  this.motor = "V8";
};

var Auto = function() {
  this.typ = "SUV";
};

var LKW = function() {
  this.typ = "Tieflader";
}

Auto.prototype = new Fahrzeug(2);
LKW.prototype = new Fahrzeug(3);

var meinAuto = new Auto();
console.log(meinAuto);
var meinLkw = new LKW();
console.log(meinLkw);

// weiteres Beispiel:
function SuperType() {
  this.colors = ["rot", "grün"];
}

function SubType() {
}

SubType.prototype = new SuperType();

var instance1 = new SuperType();
instance1.colors.push("blau");

console.log(instance1);
