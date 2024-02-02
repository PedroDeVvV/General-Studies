"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const items = [1, 2, 3, 3];
const letter = ["a", "b", "c", "d"];
showArrayItems(items);
showArrayItems(letter);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuario é ${this.name}`);
    }
    showUserAge(canShow) {
        if (canShow) {
            console.log(`${this.name} tem ${canShow} anos`);
            return;
        }
        console.log("Idade não foi informada no padrão correto");
    }
}
const zeca = new User("Zeca", "Admin", true);
const leana = new User("Leana", "User", true);
console.log(zeca);
zeca.showUserName();
leana.showUserName();
leana.showUserAge(22);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
const g63 = new Car("MERCEDES BENZ", 6);
g63.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
    showCarName() {
        console.log(`A marca do carro é ${this.brand}, possui ${this.wheels} rodas e um motor ${this.engine}`);
    }
}
const rs7 = new SuperCar("Audi", 4, 2.5);
console.log(rs7);
rs7.showCarName();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
