//comments
/*
Multi
line
comments
*/
// varibles
// keywords - let - es5
//          - var, const - ecma script 6 version(es6)

// ES6 features
// var, const keywords
// Object destructuring - {}
// Array destructuring - []
// spread operator(...) - copy one array elements into another array
// rest parameters(...) - used to collect more than one input value
// Arrow functions / anonymous functions
// class
// interface
// import/export

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
// Array Destructuring - es6

// person.address[0].city
// person.address[1].city
// person.firstName;
// person.age;
const { firstName, lastName, age } = person;
console.log(firstName);
console.log(age);

//  person.contactNos[0]
//  person.contactNos[1]

const [c1, c2] = person.contactNos;
console.log(c1);
console.log(c2);



// Array Destructuring - es6
const [addr1, addr2] = person.address;

console.log(addr1.city);
console.log(addr1.state);

console.log(addr2.city);
console.log(addr2.state);

// functions
// function add(x, y) {
//     return x + y;
// }

// // call function
// console.log(add(10, 20));

// function add(x, y, z) {
//     return x + y + z;
// }

// console.log(add(10, 20, 30));


// Rest parameters (...)
function add(x, y, ...nums) {
    let total = x + y;
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
    }
    return total;
}

console.log(add(10, 20, 30, 40, 50, 100));
// x = 10
// y = 20
// nums =[30, 40]

// default/optional parameters
function sub(x, y = 10) {
    return x - y;
}
console.log(sub(10)); // -90
console.log(sub(20, 10)); // 10

// spread operator(...) - es6 
const shapes = ['triangle', 'square', 'cube'];
// const newShapes = [];
// for (let i = 0; i < shapes.length; i++) {
//     newShapes[i] = shapes[i];
// }
// console.log(newShapes);

const newShapes = [...shapes];
console.log(newShapes);
const newShapes2 = ['rectangle', ...shapes, 'circle'];
console.log(newShapes2);

// Arrow functions - es6
// two input arguments
/*
   function add(x,y) {
    return x+y;
   }
*/

// function keyword not required
// function name not required
// if function body is having only one return statement, then {} and return stmt
// not required.
// between input arguments & body insert '=>'
const sum = (x, y) => x + y;
console.log(sum(10, 20)); // 30

// isEven - one input argument
// function isEven(x) {
//     if (x % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// arrow function
const isEven = x => {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(10)); // true

// // no input arguments
// function greet() {
//     return "Hello World!!";
// }

const greet = () => "Hello World!!";

console.log(greet());

// class - es6
class Employee {
    constructor(eId, eName, eSalary) {
        this.eId = eId;
        this.eName = eName;
        this.eSalary = eSalary;
    }
    setEId(eId) {
        this.eId = eId;
    }
    getEId() {
        return this.eId;
    }
}

let emp1 = new Employee(1001, 'Raj', 100000);
let emp2 = new Employee(1002, 'Sam', 50000);

console.log(emp1);
console.log(emp2);
console.log(emp1.getEId());
emp1.setEId(1010);
console.log(emp1);

interface Product {
    pId;
    pName;
    pPrice;
}

