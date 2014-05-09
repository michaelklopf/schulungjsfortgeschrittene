// Module Pattern
console.log("bsp_09_module.js");

var myModule = function() {
  'use strict';
  var one = 1;
  var two = 2;

  var privateFunction = function() {}; // besser _privateFunction

  var publicFunction = function() {
    return one;
  };

  return {
    getOne : publicFunction,
    //besser:
    getTwo : function() {
      return two;
    }
  }
}();

var one = myModule.getOne();
var two = myModule.getTwo();

console.log(one);
console.log(two);
