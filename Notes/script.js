////////primitives
/*let numbers = 4;
numbers = 5;
let numbersArrays = [1,2,3,4,5];
console.log(numbers);

let string = 'string';
let strings = 'strings';

//both work, be consistent

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
let names = ['Brian', 'Andrew', 'Winny', 'Kaey'];
let numbers = [1,25,6,7,8];
let crazyArray = ['string', 203, true];

console.log(names[0]);
console.log(names.length);
//^shows length of array; the number of elements in the array

names.push('melkadze sir');
//adds new element to the end of an array

names.forEach(function(el){
    console.log(el);
})
*/