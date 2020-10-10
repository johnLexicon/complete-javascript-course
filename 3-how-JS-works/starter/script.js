///////////////////////////////////////
// Lecture: Hoisting
// Hoisting occurs under the creation phase of the execution
// Under the creation phase all variables are declared with the value undefined.

var CURRENT_YEAR = new Date().getUTCFullYear();
var RETIREMENT_AGE = 65;

// Ok to call function declaration before
var actual_age = age(1975);
console.log(actual_age);

function age(birthdate) {
  return CURRENT_YEAR - birthdate;
}

// Unable to call a function expression before
// var yearsToRetirement = retirement(1975);

// Function expression
var retirement = function (birthdate) {
  return RETIREMENT_AGE - (CURRENT_YEAR - birthdate);
};

var yearsToRetirement = retirement(1975);
console.log(yearsToRetirement);

//Hoisting variables

var i = 1;

function show_i() {
  console.log(i);
  // When using the variable declaration below the console.log above prints undefined. Without the declaration it uses the global i variable
  // var i = 3;
  i = 2;
}

show_i();
console.log(i);

///////////////////////////////////////
// Lecture: Scoping
// In javascript the only way to create a scope is by using functions and not like other languages there you can scope in if, while, ...

// First scoping example

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}

// Example to show the differece between execution stack and scope chain

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + b + c + d);
}

///////////////////////////////////////
// Lecture: The this keyword
