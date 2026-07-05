var num1 = 15;
var num2 = "15";
console.log(num1);
console.log(num2);
// un solo = es para asignar el valor de una variable
//operadores == compara solo el valor de la variables
// operador estricto  === compara no solo el valor sino tambien el tipo de datos
if (num1 == num2) {
  console.log(`el numero ${num1} es igual a ${num2}`);
} else {
  console.log(`son diferentes`);
}

// != el compara solo valores
// mientra que !== es un comparador estricto compara el tipo de datos y el valor
if (num1 != num2) {
  console.log(`el numero ${num1} es diferente  a ${num2}`);
} else {
  console.log(`son iguales`);
}
