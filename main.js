// Node is written in C++
// As V8 enginer (that converts nodeJS into machine language) is written in C++
// Ecmascript : the standard javascript is based on..

// Javascript engine : program that converts JS ode into something that the computer can understand

// Google V8 engine : google chrome browser..
// javascript code > v8 > machine code

// NodeJS is there over web server..

/* 

Why NodeJS?

1) Better ways to organise our code into reusable pieces
2) ways to deal with files
3) ways to deal with databases
4) Ability to communicate over internet
5) Ability to accept requests and send responses
6) Way to deal with work that takes a long time

.h and .cc files in the v8 engine.. which are built in c/c++

Javascript core :

under lib directory ...

Node is a framework and environment to run javascript..

Versions:

io.JS : 3.0, 2.0 ...
NodeJs : 0.12.7

both merged into v10.19.0

*/

var a = 1;
var b = 2;
//var c = a+b;
console.log(a+b);

// Breakpoint : a spot in our code where we tell a debugging tool to puse the execution of our code...

/* 

1) Module : reusable block of code whose existence does not accidently impact other code...
2) CommonJS modules : an agreed upon standard for how the code modules should be structured

1) First class function : everything you can do with other types you can do with functions...
You can use functions like strings, number, etc (i.e., pass them around, set variable equal to them, put them in arrays and more... )

2) An expression : a block of code that results in a value...
*/

//function statement

function greet(){

    console.log("first pattern");
}

// function invoking...
greet(); 

// functions are first class
function logGreeting(fn){
    fn();
}

logGreeting(greet); // notice you aren't giving a () after the greet function... as it might run the greet function...

// function expression

var greetMe = function() {
    console.log("second pattern");
}
greetMe(); // invoking it..

//it's first class

logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function(){
    console.log('Third pattern!');
})