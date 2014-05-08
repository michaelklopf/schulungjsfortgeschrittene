// Mehr zu Objekte
console.log("bsp_05_objects_on_steroids.js");

// Objekterstellung
var person = {
    name: "peter"
};

var auto = {
    name: "Audi"
};

printName(auto);

function printName(p) {
    console.log(p.name); // gibt alles aus, egal welches objekt
}

// Factory-Pattern
// Vorteil: simpel
// Nachteil: keine typ Ueberpruefung moeglich
function machePerson(n) {
    var p = new Object();
    p.name = n;
    return p;
}

var person1 = machePerson("Hans");
console.log(person1);

function machWasMitPerson(p) {
    if (typeof p == "object") {
        console.log(p);
    }

    if (p instanceof Object) {
        console.log(p);
    }
}

machWasMitPerson(person1);
machWasMitPerson(document); // geht auch obwohl anderer typ, das ist schlecht, darum anderes Pattern

// Contructor-Pattern
// Vorteil: Typ-Ueberpruefung moeglich
// Nachteil: Methoden werden jedes Mal neu erstellt

// Lösung: Methode außerhalb definieren
var getName = function() {
    return this.name;
};

var Person = function(pId, name) {
    this.personalId = pId;
    this.name = name;
    this.getPerId = function() {
        return this.personalId;
    };
    this.getName = getName;
};

var p1 = new Person("1234", "Karl Mueller");
var p2 = new Person("5678", "Hans Dampf");

console.log(p1);
console.log(p1.getPerId());
console.log(p2.getName());

if (p1 instanceof Person) {
    console.log("Ja.");
}

if (p1 instanceof Object) {
    console.log("Ja.");
}

// Private Scope
var AdvancedPerson = function() {
  var farbe = '';

  this.setFarbe = function(f) {
    _farbe = f;
  };

  this.getFarbe = function() {
    return _farbe;
  }
}

var ap1 = new AdvancedPerson();
console.log(ap1);
ap1.setFarbe("blau");
console.log(ap1.getFarbe());

// Prototype
// Nur Funktionen koennen dies nutzen
// Objekte haben keine Prototyp Funktionalitaet
var ProtoPerson = function(pId, name) {
    this.perId = pId;
    this.name = name;
};
ProtoPerson.prototype.sagHallo = function() {
  console.log("hallo hier ist meine Personal Id ", this.perId);
}

var anderePerson = new ProtoPerson("123", "Horst");
anderePerson.sagHallo();

var nochEiner = new ProtoPerson("456", "Franz");
nochEiner.sagHallo();

// siehe http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/

// weiteres Beispiel
var Tier = function() {};

Tier.prototype = {
  name : "Name nicht vergeben.",
  alter : 0,
  gehege : ["Tropenhaus", "Wasserbecken"],
  getDaten : function() {
    return this.name + " (" + this.alter + ")";
  }
};

var t1 = new Tier();
console.log(t1.name);

t1.name = "Flipper";
console.log(t1.name);

console.log("Originalgehege ", t1.gehege);
t1.gehege.push("Sumpf");
console.log("geaendertes Gehege ", t1.gehege);

var t2 = new Tier();
t2.name = "Benjamin";

console.log(t2);
console.log(t2.gehege); // ist das gleiche Array wie bei Flipper, da beide die gleiche Referenz nutzen auf das Array
