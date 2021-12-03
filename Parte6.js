function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  return nombre[0].toUpperCase() + nombre.slice(1);
  // nombre debe ser un array. COn .slice devulve una copia del del array
  // al poner [0] le indico que es la primer letra la cual quiero en mayuscula
  // si no aclaro [0], todo el nombre completo se vuelve mayuscula.
  // .toUpperCase solo no sirve, ya que me devolveria solo la primer letra en mayuscula, no todo el contenido
  // al sumar .slice , logro que me devuelva todo el valor de nombre con la primera en mayuscula.
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  cb() // es igual que invocar una funcion normal

}