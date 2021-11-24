function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]; // el elemento entre llaves indica el indice del valor a devolver
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length ;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];

  for(let x = 0 ; array.length > x ; x++){
    nuevoArray[x] = array[x] + 1;
  }
  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  /* por que no funciona:
    return array.push( elemento );   ???
  */

  array[array.length] = elemento ;
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array ;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
   return palabras.join(' ') ;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for(let x = 0 ; x < array.length ; x++){
    if(array[x] === elemento){
      return true ;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let suma = 0

  for(let x = 0 ; x < numeros.length ; x ++){
    suma = suma + numeros[x];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sumar = 0
  let promedio = 0

  for(let x = 0 ; x < resultadosTest.length ; x++){
    sumar = sumar + resultadosTest[x];
  }
  promedio = sumar / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numeroMayor = 0

  for( let x = 0 ; x < numeros.length ; x++){
   if(numeros[x] > numeroMayor){
     numeroMayor = numeros[x];
   }
  }
  return numeroMayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  let total = 1; // debe empezar en 1, ya que cualquier numero multiplicado por 0 es igual a 0

  if(arguments.length < 1){
    return 0;
  }
  else{
    for( let x = 0 ; x <arguments.length ; x++){
      total = total * arguments[x];
    }
  }
 return total;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0

  for( let x = 0 ; x < arreglo.length ; x++){
    if( arreglo[x] > 18){
      contador++ ;
    }
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  }
  else{
    return 'Es dia Laboral';
  }

}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let numero = n.toString();

  if( numero.charAt(0) === '9'){
    return true;
   }
  else{
     return false;
   }

}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  for(var x = 0 ; x < arreglo.length -1 ; x++){
    if(arreglo[x] !== arreglo[x + 1]){
      return false;
    }
  }
  return true;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var nuevoArray = [];

  for(let x= 0; x < array.length; x++) {
    if(array[x] === "Enero" || array[x] === "Marzo" || array[x] === "Noviembre") {
      nuevoArray.push(array[x]);
    }
  }
  if(nuevoArray.length < 3) { //menos de tres ya que son 3 los meses que se piden (enero, marzo, noviembre)
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray; //si estan los tres meses , devulvo el array
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray2 =[] ;

  for( let x = 0 ; x < array.length ; x++){
    if(array[x] > 100){
      nuevoArray2.push(array[x]);
    }
  }
  return nuevoArray2
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;

  for(var x = 0; x < 10; x++) {
    suma = suma + 2;

    if(suma === x){
      break; // break termina con la sentencia (if), y continua con la siguiente (if), osea que ignoraria el else
    }
    else {
      array.push(suma);
    }
  }

  if(x < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }

}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let suma = numero;
  let array = [];

  for( let x = 0 ; x < 10 ; x++){
    if(x === 5){
      continue; // cuando se da la condicion x === 5 , ignora el resto del codigo por unica vez, luego continua ejecutandolo
    }
    else {
      suma = suma + 2 ;
      array.push(suma);
    }
  }
  return array;
}
