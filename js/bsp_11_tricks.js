// Helpful tricks
// http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/
'use strict';

// Short cutting with ||
var logString = function(string_text) {
  if(!string_text) {
    string_text = "Empty String!";
  }
  console.log(string_text);
};

var logStringWithTrick = function(string_text) {
  string_text = string_text || "Empty String";
  console.log(string_text);
};

logStringWithTrick("First string");
logStringWithTrick();

// Short cutting with &&
var isBiggerThanTen = function(number) {
  if (number && number > 10) {
    return true;
  } else {
    return false;
  }
};

var isBiggerThanTenWithTrick = function(number) {
  return number && number > 10;
};

console.log("5 : " + isBiggerThanTenWithTrick(5));
console.log("15 : " + isBiggerThanTenWithTrick(15));

// It works with functions too
var userName = '';
var logIn = function() {};
var signUp = function() {};
if (userName) {
  logIn(userName);
} else {
  signUp();
}

userName && logIn(userName) || signUp();

// And more
var userID;
if (userName && userName.loggedIn) {
  userID = userName.id;
} else {
  userID = null;
}

var userID = userName && userName.loggedIn && userName.id;

// IIEF - Immediately Invoked Function Expressions
(function($) { 
  var firstName = "Richard";
    function init() {
     doStuff(firstName);
   } 

  function doStuff() {
  }

  function doMoreStuff() {
  }

  init(); 
})(jQuery);

// use it to prevent closure bugs in for loops
function createIds(arrayWithElements) {
  var i;
  var uniqueID = 1000;
  for (i = 0; i < arrayWithElements.length; i++) {
      arrayWithElements[i]["id"] = (function (j)  {
          return uniqueID + j;
      })(i);
  }
  return arrayWithElements;
}

var names = [{name : "Chino"}, {name : "Stef"}, {name : "Abe"}];
createIds(names);
console.log(names);
