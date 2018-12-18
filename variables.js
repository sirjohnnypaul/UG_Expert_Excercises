//Basic Variables Introduction

//VAR VS LET
//ECMA Script version 6 set as a standard in script languages to use let

//Global

let x = 'Hello I am let'; 
var y = 'Hello I am var'; 

//Browser Object Model, Java Script Window
//https://www.w3schools.com/js/js_window.asp

console.log(x); 
console.log(y);


console.log(window); 
console.log(window.x); //let will be shown as undefined since it's not added as properties of global window
console.log(window.y); 

//Function
//we can use var and let however we want
function myFunction() {
    let surname = "My Name Is Bond";
    var fullName = "James Bond";
}

//For loops

function myIteration () {
    //z is *not* visible out here
    for( let z = 0; z < 10; z++ ) {
        //z is only visible in here (and in the for() parentheses)
        //and there is a separate z variable for each iteration of the loop
    }
    //z is *not* visible out here
}

function myIteration2 () {
    //c is visible out here
    for( var c = 0; c < 10; c++ ) {
        //c is visible in the whole function
    }
    //c is visible out here
}

//Redeclatation

let mylet = 1;
console.log(mylet);
// let mylet = 2;
// console.log(mylet);

var myvar = 1;
console.log(myvar);
var myvar = 2;
console.log("I can be redeclared, I'm just being replaced to "+ myvar);

//Const

const myfinalvalue = 122;
console.log(myfinalvalue);
// myfinalvalue = 144;

// BUT Const can change values in object

const particle = {x: 100, y: 100};
console.log(particle);

particle.x = 122;
console.log(particle);

//Add new element to const object is working too
particle.z = 400;
console.log(particle);

const Person = {
    name: 'James',
    surname: 'Bond',
    status: 'Active',
    license: 'License To Kill',
    number: '007',
    additionalInfo: ''
}

console.log(Person);

Person.additionalInfo = 'To Kill.. Or Not To Kill';
console.log(Person);


//Functions with var and let

function sayMyName(name) {
    console.log("Your name is "+name);
}

sayMyName("James");

var sayMySurname = function(surname) {
    console.log("Your surname is "+surname);
}
sayMySurname('Bond');

let sayMyFullName = (name,surname) =>{
    console.log("Your full name is "+name+ " "+ surname);
}
sayMyFullName('James','Bond');

const displayMyData = (name,surname,age,city,phonenumber) => {
    console.log("Your name is "+name+
    " surname is "+surname+", you are "
    +age+" years old, live in "+city+
    " city. Your phone number is "+phonenumber);
}

displayMyData('Scott','Forstall',45,'California',647223123);


//All variables are equall if its about function creation
//Arrow function
//arrow function js example
//https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Functions/Funkcje_strzalkowe
//

//standard function
var func = function(num) {
    return num * 2;
}
console.log(func(5));

//arrow function
var func1 = num1 => num1 * 2;
console.log(func1(5))

var func = (num1,num2,num3) => {
    console.log(num1+num2);
    return num3;
};

console.log(func(1,4,6));


//standard writting
// setInterval(function(){
//     console.log('Hi! I will show up every 2 seconds')
// },2000)
 
// //arrow function
// setInterval(()=>{
//     console.log('Hi! I will show up every 2 seconds too')
// },2000)

//More complicated functions
//We can not use this inside of setInterval scope

function Dog(){
    this.speed = 0;
    var self = this;
    setInterval(function(){
        console.log(self.speed++);
    },1000)
}
// var Frankie = new Dog();

// //Arrow function allows to access this

// function Dog1(){
//     this.speed = 0;
//     setInterval(() => {console.log(this.speed++)},1000)
// }
// var Ozzy = new Dog1();


//standard version -- uncomment one of them to use

// function setup() {
//     createCanvas(600, 400);
//     background(0);
//     let button = createButton('press');
//     button.mousePressed(changeBackground);
    
//     function changeBackground() {
//         background(random(255));
//     }
// }

// //version with => and removed {}
// function setup() {
//     createCanvas(600, 400);
//     background(0);
//     let button = createButton('press');
//     button.mousePressed(() => background(random(255)));
// }


//Higher order functions
// higher-order function is a function that can 
//take another function as an argument, or that 
//returns a function as a result.


//option one
function multiplayer(x, factor) {
    return x * factor;
}

//option two
function multiplayerOne(factor) {
    return function(x) {
        return x * factor;
    }
}

//option two with arrow function 
//when there are two parameters there has to be {}
//if one then not neccessary
x => x * factor;

//so
function multiplayerTwo(factor) {
    return x => x * factor;
}

let doubler = multiplayerTwo(2);
let tripler = multiplayerTwo(3);

console.log(doubler(4)); // 4 *2
console.log(tripler(4)); // 3 * 4


//higher order functions on arrays

let vals = [4,8,1,2,9];
console.log(vals);

// map function
// passes values to do something with them
// creates new array

function doublerOne(x) {
    return x * 2;
}

vals = vals.map(doublerOne);
console.log(vals);


//find Max using vals1

let vals1 = [5,4,1,2,9];

function findMax(max, val) {
    if (val > max) {
        max = val;
    }
    return max;
}

let biggest = vals1.reduce(findMax);
console.log("The biggest number from provided array "+vals1+ " is "+biggest);


//version with arrow function
let biggest1 = vals1.reduce((acc, val) => {
    if (val > acc) {
        acc = val;
    }
    return acc;
});

console.log(biggest);

//or version like that
//if b > a take a as biggest if not take b
let biggestOne = vals1.reduce((a, b) => b > a ? b : a);
console.log(biggestOne)

//sum again
let sum1 = vals1.reduce((acc, val) => acc + val);
console.log("The sum is "+sum1)


//fill functions

let vals2 = [4,8,1,2,9];

vals2.fill(0); //this acts on current array
console.log(vals2);//array filled with 0

vals2 = vals2.map(x => Math.random()); //this acts on current array
console.log(vals2);//array filled with randoms

//change the size of array now

let vals3 = new Array(100);
vals3 = vals3.fill(0).map(x => Math.random()+1);
console.log(vals3);

//or

vals4 = Array(100).fill().map(Math.random);
console.log(vals4);

let vals5 = [5,4,3,1,2,6];
let sum = 0;
for (let i = 0; i < vals5.length; i++) {
    sum += vals5[i];
}

console.log(vals5);


//types, defined and undefined and null variables, objects

var name;
console.log(name);
console.log(typeof(name));

name = null;
console.log(name);
console.log(typeof(name));

let name1;
console.log(name1);
console.log(typeof(name1));

name1 = null;
console.log(typeof(name1));

var age = 2;
let age1 = 13;

console.log(typeof(age));
console.log(typeof(age1));

var surname = 'Bond';
let surname1 = 'Bond';

console.log(typeof(surname));
console.log(typeof(surname1));

//can  not leave const undeclared
// const nameConst;
// console.log(nameConst);

const nameCon = 'Jasmine';
const ageCon = 13;

console.log(typeof(nameCon));
console.log(typeof(ageCon));

var Person = {};
console.log(typeof(Person));

var Person = {
    name: 'James',
    surname: 'Bond'
}

console.log(typeof(Person));

let a = null;
console.log(a);
console.log(typeof(a));

let Person1 = null;
console.log(Person1);
console.log(typeof(Person1));

