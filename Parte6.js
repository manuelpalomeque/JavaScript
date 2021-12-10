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

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

 return cb (n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var resultado = numeros.reduce(function cb(acc, cur){ // acc y cur son palabras reservadas. acc =contador acumulador ( onda x++),cur = valor actual que se analiza
    return acc + cur;
  }, 0);
  cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  array.forEach(function (cur, index){ // cur e index son palabras reservadas. cur = valor actual siendo procesado en el Array, Index= indice del elemento actual siendo procesado
    cb(cur);
  });
}