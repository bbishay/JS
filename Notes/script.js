////////primitives
/*let numbers = 4;
numbers = 5;
let numbersArrays = [1,2,3,4,5];
console.log(numbers);

let string = 'string';
let strings = 'strings';

let boolean = true; //also false

const firstName = 'Rob';
const job = 'student';
const birthYear = 2002;
let isMarried = false;


//console.log('Hello my name is ' + firstName + '. I am a ' + job + ' and I was born in ' + birthYear + ' and am I married? ' + isMarried);
//^2014 or 2015; very inconvenient

console.log(`Hello my name is ${firstName}, I am a ${job}, I was born in ${birthYear}, and am I married? ${isMarried}.`)
//much easier, take note of back ticks rather than regular quotes; dollar sign curly brackets ${}


const now = new Date().getFullYear();
const yearIlsa = 2003;
let fullAge = 18;
let isFullAge = (now - yearIlsa) >= fullAge;
//console.log(isFullAge);
let ageWill = now - 2002; 
let ageNick = 18;
let averageAge = (ageNick + ageWill) / 2;
//console.log(averageAge);

let x,y,z,q;
x = 5;
y = x;
z = y;
q = z;
//console.log(z);
*/
/*
//////If else statements
let firstName = `Paul`;
let status = 'single';


if (status === 'single'){
    console.log(`${firstName} is single and ready to mingle`);
} else{
    console.log(`Somoene made a big mistake with ${firstName}`);
}

let firstName = 'Sarah';
let age = 17;

if (age < 13){
    console.log(`${firstName} is a little child`);
} else if (age >=13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young woman`);
} else {
    console.log(`ha she's old`);
}

//the age >= &&s are not needed because the code runs from top to bottom and carries out the first true statement
*/
/*
///////Ternerary Operator
let firstName = 'Melkadze';
let age = 17;

age >= 21 ? console.log(`${firstname} will drink alcohol`) : console.log(`${firstName} shall drink choccy milk`);
//condition ? exprIfTrue : exprIfFalse;
//if else statement shortcut
*/
/*
////////Truthy and Falsey and equality operators

//falsey values: null, 0, undefined, '', NaN
//truthy values: anything not above this line

let height = 22;
if (height == '22'){
    console.log('hey this is type coercion!');
} else {
    console.log('no type coercion with triple ===');
}
*/
/*

//////////funcitons
function calculateAge(birthYear){
    return 2019 - birthYear;
}

let galloBirth = 2002;
calculateAge(galloBirth);

//funcitonCall(argument goes here)

function noArg(){
    console.log('something');
}

noArg();

const ageGallo = calculateAge(2002);
const ageIlsa = calculateAge(2003);
const ageThami = calculateAge(2008);

//console.log(ageGallo, ageIlsa, ageThami);

function yearsUntilRetire(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    console.log(`${firstName} retires in ${retirement} years.`);
}

yearsUntilRetire(2002, 'Brendan');

console.log(age);
//does not work, only accessible within the scope of the function


//function whatDoYouDo(job, firstName) {}; function declaration without definition/expression
*/
/*
//////////switch case
let whatDoYouDo = function(job, firstName){
 switch (job) {
     case 'teacher':
         return firstName + ' teaches children';
     case 'driver':
         return firstName + ' drives people....over bryan';
     case 'designer': 
         return firstName + ' designers things';
     default:
         return firstName + ' is almost as lazy as Bryan';
 }
}

console.log(whatDoYouDo('teacher', 'Thami'));
console.log(whatDoYouDo('driver', 'Veda'));
console.log(whatDoYouDo('musician', 'Rob'));
*/


////////////Arrays

//Initializing an array

/*


console.log(names[0]);
console.log(names.length);
//^shows length of array; the number of elements in the array

names.push('melkadze sir');
//adds new element to the end of an array

names.forEach(function(el){
    console.log(el);
})

let names = ['Brian', 'Andrew', 'Winny', 'Kaey'];
let numbers = [1,25,6,7,8];
let crazyArray = ['string', 203, true];

const namePairs = [names[0] + names[1], names[2] + names[3]];

console.log(namePairs);
*/



///////////objects and methods
/* const spiderMan = {
    alias: 'Spider-Man',
    firstName: 'Peter',
    lastName: 'Parker',
    age: 16,
    goodGuy: true,
    location: {
        state: 'NY',
        city: 'NYC',
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

//console.log(hero.location.city);

const me = Object.create(spiderMan);

me.alias = 'Superman';
console.log(me);
console.log(spiderMan); */

//////////////////LOOPS/iterations
/*
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
} 
//for loop

cars.forEach(function(car){
    console.log(`${car}`);
});
//for loop shortcut
*/

////////hoisting, scope, exeution stack AKA javascript you don't see

///execution stack
/* function test1(){
    console.log(`test1`);
    function test2() {
        console.log(`test2`);
        function test3(){
            console.log('test3');
            test1();
        }
        test3();
    }
    test2();
}

test1(); */

///hoisting
/* test1();
notHoisted();

function test1(){
    console.log('this is hoisted?');
}

const notHoisted = function(){
    console.log('im not hoisted');
    
} */
//function can be called from above or below the defining of the function (hoisted), but a variable (or const in this case) cannot (not hoisted)



/////////////this keyword

/* function test1(){
    console.log(this);
}

test1(); */

/* const spiderMan = {
    alias: 'Spider-Man',
    firstName: 'Peter',
    lastName: 'Parker',
    age: 16,
    goodGuy: true,
    location: {
        state: 'NY',
        city: 'NYC',
    },
    getBirthYear: function(){
        //return 2019 - this.age;
        console.log(this);        
    }
}
//this points to our object
//spiderMan.getBirthYear();

function Hero(alias, powers, age){
    this.alias = alias;
    this.powers = powers;
    this.age = age;
}
const batman = new Hero('Batman', 'Wealthy', 42);
console.log(batman);
 */

 //////////////classes

 /* class Album{
     constructor(title, artist, yearReleased){
         this.title = title;
         this.artist = artist;
         this.yearReleased = yearReleased;
     }
     calculateAge = () => new Date().getFullYear() - this.yearReleased;
     
     
      calculateAge(){
         return (new Date().getFullYear() - this.yearReleased);
     } 
 }

const abbeyRoad = new Album('Abbey Road', 'The Beatles', 1969); //instantiate new album
const sgtPepper = new Album('Sergeant Pepper', 'The Beatles', 1970);

//console.log(Album);

class CD extends Album {
    constructor(title, artist, yearReleased, digital){
        super(title, artist, yearReleased);
        this.digital = digital;
    }
} */


///////async
/* const second = () => {
    setTimeout(() => {
        console.log('Async hey there');   
    }, 2000);
}

const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
}

first(); 
function getPkmn() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(result => result.json())
    .then(data => console.log(data.sprites.front_shiny))
} //understand what .then does

getPkmn(); */

/* async function getPkmn(){
    try{
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');
        const data = await result.json();
        console.log(data);


    }catch(err){
        console.log(err);
        
    }
}

getPkmn(); */