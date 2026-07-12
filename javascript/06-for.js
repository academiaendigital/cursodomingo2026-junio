/*bucle for*/
//arreglo

const ciudad = ["Maracay", "Caracas", "La Guaira", "San Juan", "Valencia"];
/*console.log(ciudad[1]);*/
//length metodo cuenta cuantos valores hay en mi arreglo y los devuelve
for (let i = 0; i < ciudad.length; i++) {
  console.log(ciudad[i]) + "</br>";
}

let text = "";
for (let x = 1; x <= 15; x++) {
  text += "El numero es " + x + "</br>";
}

document.getElementById("numero").innerHTML = text;
