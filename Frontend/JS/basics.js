//comments
/*
Multi
line
comments
*/
// varibles
// keywords - let - es5
//          - var, const - ecma script 6 version(es6)

// let - scope - block level
let x = 10;
let y = 100;

// Read variable values
console.log(x);

// Run - Ctrl+Alt+N

// for - 
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
//console.log(i); // 5, err

// var - keyword - global scope
var z = 1000;
console.log(z);

for (var a = 5; a >= 0; a--) {
    console.log(a); // 5, 4, 3, 2, 1, 0
}
console.log(a); // -1

// const 
const pi = 3.14;
//pi = 3.15;
console.log(pi);

// Data type in JS
// typeof - find the type of value
console.log(typeof (10)); // number
console.log(typeof (10.00)); // number
console.log(typeof (true)); // boolean

console.log(typeof ('false')); // string
console.log(typeof ("false")); // string
x = 10 / 'a';
console.log(x);//NaN
console.log(typeof (null));// object

// Create object
const person = {
    firstName: "Raj",
    lastName: 'K',
    age: 12,
    contactNos: [9999911111, 9999922222],
    address: [
        {
            city: 'Chennai',
            state: 'Tamilnadu'
        },
        {
            city: 'Bangalore',
            state: "Karnataka"
        }
    ]
}

console.log("##################");
console.log(person);
person.firstName = 'Ali';
console.log(person);
console.log("##################");
const x1 = 100;
console.log(x1);
// x1 = 1000;
// console.log(x1);

// person = {};
// colors = ['black'];

// type of person
console.log(typeof (person));//object

// read object values

console.log(person.firstName); // Raj
console.log(person.age); // 12
console.log(person.contactNos[1]);// 9999922222
console.log(person.address[0].city);//Chennai


// Array
const colors = ['red', 'orange', 'blue'];

// type of array
console.log(typeof (colors));// object

// read
console.log(colors[0]); //red
console.log(colors[2]);//blue

// add element to array
colors.push('White');

console.log(colors); //[ 'red', 'orange', 'blue', 'White' ]


// modify
colors[0] = 'Red';
console.log(colors); //[ 'Red', 'orange', 'blue', 'White' ]

// remove
colors.pop();
console.log(colors);//[ 'Red', 'orange', 'blue' ]

let slicedArr = colors.slice(0, 2);
console.log(slicedArr); // ['red', 'orange']

// remove specific element from array
colors.splice(0, 1);
console.log(colors);  // [ 'orange', 'blue' ]


// Object Destructuring - es6
// person.address[0].city
// person.address[1].city
// person.firstName;
// person.age;
const { firstName, lastName, age } = person;
console.log(firstName);
console.log(age);

const [c1, c2] = person.contactNos;
console.log(c1);
console.log(c2);


// Array Destructuring - es6
