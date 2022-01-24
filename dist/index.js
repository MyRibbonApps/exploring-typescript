"use strict";
let id = 5;
console.log('ID:', id);
// Types
let developer = 'Anton Franzen';
let knowsTypescript = true;
let x = "Hello World";
let age = 20;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Anton', true];
//Tuple Array
let employee;
ids.push("1");
console.log(ids);
employee = [
    [1, 'Anton']
];
console.log(employee);
const userData = {
    id: Math.random(),
    name: 'Anton',
    age: 20
};
console.log(userData);
// Assertion
let state = false;
let setState = state; // this takes whateverr state is and we can only set this to false/true
setState = true;
console.log(setState);
// Functions
function testFunc(x) {
    console.log("ibweih");
    return x;
}
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function other(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Anton',
    age: 20 // Optional we do not need to have the age here..
};
// user1.id = 10 does no work as its read only
console.log(user1);
const transformFile = (filename) => {
    return filename;
};
console.log(transformFile("The filename"));