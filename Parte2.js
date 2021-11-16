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