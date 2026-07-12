/* switch */
var date = 1984;
switch (true) {
  case date >= 1981 && date <= 1996:
    console.log("son milenials");
    break; //paralabra reservada para romper el swith

  case date >= 1997 && date <= 2010:
    console.log("son generacion Z");
    break;
  case date >= 1965 && date <= 1980:
    console.log("son generacion x");
    break; //paralabra reservada para romper el swith
  default:
    console.log("Generación no categorizada en este rango");
}



var rol = "editor";
switch (true) {
  case rol == "admin":
    console.log("eres admin tienes acceso a todo");
    break; //paralabra reservada para romper el swith

  case rol == "invitado":
    console.log("solo puedes leer");
    break; //paralabra reservada para romper el swith
  case rol !== "editor":
    console.log("no eres editor no tienes  tales permisos");
    break;
  default:
    console.log("Rol no reconocido o sin permisos.");
}

// en caso sea de caracas diga soy caraque;o en caso sea madri soy madrice;o
