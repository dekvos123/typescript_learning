let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let myName: string = "dekvos";
let age: number = 20;
let sentence: string = `hello, my name is ${myName}, ${age + 1} year old`;

console.log(sentence);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];

x = ["hello", 1];
x[2] = 33;
console.log(x);

enum Color {
  Red,
  Blue,
  Yellow
}
let c: Color = Color.Red;

let colorName: string = Color[2];
console.log(colorName);

let u: undefined = undefined;
let n: null = null;
