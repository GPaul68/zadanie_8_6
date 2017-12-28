/*scripts.js
Conditional instructions in practice*/

var a = 3;
var b = 6;
var value = (a * a) - (2 * a * b) + (b * b);
console.log("Value= " + value);

if (value > 0) {
    console.log("Wynik dodatni")
}
else if (value < 0) {
    console.log("Wynik ujemny")
}
else {
    console.log("Wynik równy 0")
}