// Combination Pattern (Constructor/Prototype)
console.log("combination pattern");

var ModernPerson = function(name, alter) {
  this.name = name;
  this.alter = alter;
  this.projekte = ["02", "03"];
};

ModernPerson.protoype = {
  constructor : ModernPerson,
  getDaten : function() {
    return this.name + " (" + this.alter + ") ";
  }
};

console.log("------------");
var p1 = new ModernPerson("Gustav", 23);
p1.projekte.push("45");
console.log(p1.projekte);

var p2 = new ModernPerson("Peter", 40);
console.log(p2.projekte);
