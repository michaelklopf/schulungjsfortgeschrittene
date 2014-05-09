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

    return this; // (1) zuerst hinzugefuegt fuer chaining
  },
  alertAnzahl : function() {
    console.log("Anzahl " + this.personen);

    return this; // (2) als zweites hinzugefuegt fuer chaining
  }
};

var porsche = new Auto();

porsche.alertAnzahl();
porsche.add();
porsche.alertAnzahl();

// dies sieht nicht gut aus, dreimal porsche
(porsche.add()).alertAnzahl();  // fuehrt zu Fehler wenn (1) auskommentiert
// Klammerausdruck liefert this zurueck was auf unseren Porsche verweist

// Laesst sich vereinfachen zu
porsche.add().alertAnzahl();

(porsche.alertAnzahl()).add(); // fuehrt zu Fehler wenn (2) auskommentiert

// Jetzt geht alles
porsche.alertAnzahl().add().alertAnzahl().add().add().alertAnzahl();
