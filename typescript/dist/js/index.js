"use strict";
let x = 10;
x = 20;
let firstName = "Pedro";
let age = 19;
const isAdmin = true;
const arr = [1, 2, 3];
let bool = false;
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    firstName,
    age,
};
const obj = {
    name: "Daniel",
    nacionality: "Brazilian",
};
console.log(user);
console.log(obj);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = 13;
const lettersId = ["a", "1", "teste"];
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
let teste;
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Pedro"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá  ${name} ${greet}`);
        return;
    }
    console.log(`Olá  ${name}`);
}
greeting("Pedro", "Henrique");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumber(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumber(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const items = [1, 2, 3, 3];
const letter = ['a', 'b', 'c', 'd'];
showArrayItens(items);
showArrayItens(letter);
