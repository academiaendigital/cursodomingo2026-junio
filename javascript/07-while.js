/*MIENTRAS - WHILE*/
/*MIENTRAS SE CUMPLA LA CONDICION EJECUTA LA INSTRUCCION*/

let text = "";
let num1 = 5;
let num2 = 65;

let resultado = num1 + num2;

while (resultado <= 80) {
  text += "el numero a imprimir es " + resultado + "</br>";
  document.getElementById("text").innerHTML = text;
  resultado++;
} //CIERRE DE WHILE

/* DO WHILE  haz mientra se cumpla la condicion*/
var n1 = 15;
do {
  console.log("Es un numero mayor a 10");
} while (n1 < 10);
