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