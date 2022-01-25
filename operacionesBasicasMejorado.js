function operaciones(){
let num1 = Number(document.getElementById('numero 1').value);
let num2 = Number(document.getElementById('numero 2').value);

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
}