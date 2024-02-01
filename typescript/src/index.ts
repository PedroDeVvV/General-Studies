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

doSomething(5)
doSomething(true)

//generics
function showArrayItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const items = [1,2,3,3]
const letter = ['a', 'b', 'c', 'd']

showArrayItens(items)
showArrayItens(letter)