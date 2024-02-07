let x: number = 10;

x = 20;

let firstName: string = "Pedro";
let age: number = 19;
const isAdmin: boolean = true;
const arr: number[] = [1, 2, 3];
let bool = false;

//tuplas
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

//object literals -> {prop: value}
const user: { firstName: string; age: number } = {
  firstName,
  age,
};

const obj: { name: string; nacionality: string } = {
  name: "Daniel",
  nacionality: "Brazilian",
};

console.log(user);
console.log(obj);

//any
let a: any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";
id = 200;

//alias type
type myIdType = number | string | string[];

const userId: myIdType = 10;
const productId: myIdType = 13;
const lettersId: myIdType = ["a", "1", "teste"];

//enum
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: Size.M,
};

console.log(camisa);

//Literal types
let teste: "valor" | null;

// teste = "olá" - Não posso alterar valor literal

//functions
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 2));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("Pedro"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Teste");

function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`Olá  ${name} ${greet}`);
    return;
  }
  console.log(`Olá  ${name}`);
}

greeting("Pedro", "Henrique");

//interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumber(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};

console.log(multiplyNumber(someNumbers));

//narrowing - checagem de tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

//generics
function showArrayItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const items = [1, 2, 3, 3];
const letter = ["a", "b", "c", "d"];

showArrayItems(items);
showArrayItems(letter);

class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuario é ${this.name}`);
  }

  showUserAge(canShow: number) {
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

//interfaces em classes
interface Vehicle {
  brand: string;
  showBrand(): void;
}

class Car implements Vehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é: ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);
fusca.showBrand();
const g63 = new Car("MERCEDES BENZ", 6);
g63.showBrand();

//herança
class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }

  showCarName(): void {
    console.log(
      `A marca do carro é ${this.brand}, possui ${this.wheels} rodas e um motor ${this.engine}`
    );
  }
}

const rs7 = new SuperCar("Audi", 4, 2.5);

console.log(rs7);
rs7.showCarName();

//decorators
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");

console.log(sam);
