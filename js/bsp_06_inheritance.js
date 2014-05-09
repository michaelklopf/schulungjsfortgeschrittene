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

// Call
function Zweirad() {
  this.colors = ["blau", "rot"];
}

function Fahrrad() {
  // Constructor stealing
  Zweirad.call(this);
}

var inst1 = new Fahrrad();
inst1.colors.push("gelb");

console.log(inst1.colors);

var inst2 = new Fahrrad();
console.log(inst2.colors);

// ----------------
// Parasitic Combination Inheritance
// ----------------
function Vehicle(srn) {
  this.serialnumber = srn;
  this.colors = ["blau", "rot"];
}

// Prototyp-Chaining 1
Vehicle.prototype.start = function() {
  console.log("Wrrooom");
};

function Car(srn) {
  Vehicle.call(this, srn);
}

// Prototyp-Chaining 2
Car.prototype = new Vehicle();

var car1 = new Car("93248234");
car1.colors.push("pink");
console.log(car1.serialnumber);
car1.start();

var car2 = new Car("748382284");
console.log(car2.serialnumber);
