let num1 = 25;
let num2 = 35;
console.log(`La suma de ${num1} mas ${num2} es igual ${num1 + num2}`);
console.log(`La multiplicacion de ${num1} por ${num2} es igual ${num1 * num2}`);
console.log(`La resta de ${num1} menos ${num2} es igual ${num1 - num2}`);
console.log(`La division de ${num1} entre ${num2} es igual ${num1 / num2}`);
//SCOPE DE UNA VARIABLE ambito de accion de una variable

let num3; //inicializar
num3 = 15; //asignar un valor a una variable
console.log(num3);

const maracay = "araguaeno";
console.log(maracay);

if (num3 >= 15) {
  num3 = 18;
  console.log(num3);
}
console.log(num3);

var num4 = 20;
console.log(num4);
if (num4 >= 20) {
  num4 = 25;
  console.log(num4);
}

console.log(num4);
