let num1 = prompt('Introduce el primer numero', ' introduce aqui');
let num2 = prompt('Introduce el segundo numero', ' introduce aqui');
num1 = Number(num1)
num2 = Number(num2)
var Suma = num1 + num2;
var Resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;


document.write('<p> Suma ' + Suma + '<p>');
document.write('<p> Resta ' + Resta + '<p>');
document.write('<p> Multiplicacion ' + multiplicacion + '<p>');
document.write('<p> Division ' + division + '<p>');
document.write('<p> Modulo ' + modulo + '<p>');