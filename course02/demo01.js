var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var myName = "dekvos";
var age = 20;
var sentence = "hello, my name is " + myName + ", " + (age + 1) + " year old";
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ["hello", 1];
x[2] = 33;
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var c = Color.Red;
var colorName = Color[2];
console.log(colorName);
var u = undefined;
var n = null;
function test(_a) {
    var _b = _a === void 0 ? { a: 0, b: 1 } : _a, a = _b.a, b = _b.b;
    console.log(a);
    console.log(b);
}
test();
