function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  if( x > y){
    return x ;
  }
  else if ( y > x){
    return y ;
  }
  else {
    return x;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  if(edad >= 18){
    return 'Allowed';
  }
  else{
    return 'Not allowed';
  }
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  if(status === 1){
    return 'Online';
  }
  else if(status === 2){
    return 'Away';
  }
  else{
    return 'Offline';
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  if( idioma === "aleman"){
    return "Guten Tag!";
  }
  else if( idioma === "mandarin"){
    return "Ni Hao!";
  }
  else if( idioma === "ingles"){
    return "Hello!";
  }
  else if( idioma !== "ingles" || idioma !== "mandarin" || idioma !== "aleman" || idioma === undefined){
    return "Hola!";
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  var color = ' red'

  switch (color) {
    case 'blue' :
      return 'This is blue';
      break;

    case 'red' :
      return 'This is red';
      break;

    case 'green' :
      return 'This is green';
      break;

    case 'orange':
      return 'This is orange';
      break;

    default:
      return 'Color not found'
      break;
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  if(numero === 10 || numero === 5){
    return true ;
  }
  else{
    return false ;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero < 50 && numero > 20){
    return true ;
  }
  else{
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:


  if(Math.floor(numero) === numero){
    // 6,001 -> 7            6.01
    //       8                 8
    return true;
  }
  else{
    return false;
  }
}
