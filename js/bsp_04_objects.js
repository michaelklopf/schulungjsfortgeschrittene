// Objekte
console.log("bsp_04_objects.js");

// ECMA 3
var person = new Object();

person.name = "Thomas";
person.sagName = function() {
    console.log("name: ", this.name);
};

var person2 = {
    name : "Peter",
    sagName : function() {
        console.log("name: ", this.name);
    }
};

// Person und Person2 sind aequivalent

// ECMA 5
// configurable
// enumerable
// value
// writable