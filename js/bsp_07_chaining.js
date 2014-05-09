// Method Chaining
console.log("bsp_07_chaining.js");

var Auto = function() {
  'use strict';
  this.personen = 0;
};

Auto.prototype = {
  constructor: Auto,
  add : function() {
    this.personen += 1;
  },
  alertAnzahl : function() {
    alert("Anzahl " + this.personen);
  }
};
