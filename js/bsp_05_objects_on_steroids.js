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

// Fabric Pattern
function machePerson(n) {
    var p = new Object();
    p.name = n;
    return p;
}

var person1 = machePerson("Hans");
console.log(person1);