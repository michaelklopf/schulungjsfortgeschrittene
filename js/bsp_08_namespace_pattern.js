// Namespace Pattern
console.log("bsp_08_namespace_pattern.js");

// Antipattern - so macht man es nicht
function execute() {

}
execute();
var values = {a:1, b:2};

// kombinierbar mit Singleton (immer nur genau ein Modul erzeugen)

// Hier das bessere Pattern:
var App = {}; // unsicher denn es koennte App zweimal vorkommen

App.Fahrzeug = function() {};
App.Auto = function() {};

App.modul = {};

// deswegen pruefen auf
if (typeof App === "undefined") {
  var App = {};
}

// Oder Anonymer Namensraum
(function() {
  var App = {};

  App.Fahrzeug = function() {};
  App.Auto = function() {};

  App.modul = {};
})();

// So exportieren wir unsere gekapselten Daten
var anonym = (function($) {
  var App = {};

  App.Fahrzeug = function() {};
  App.Auto = function() {};

  App.modul = {
  };

  App.a = "Hallo";

  return App;
})(jQuery);

console.log(anonym.a);
