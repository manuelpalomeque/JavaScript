function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var objeto = {
    nombre: nombre,
    edad: edad,
    meow: function(){
      return 'Meow!';
    }
  };
  return objeto;
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto" es el objeto) con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  //NOTA: El nombre de la propiedad debe ser el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  /* var objeto = {
    propiedad: valor,
    property: null
  };
  */

  objeto[property] = null ; // no me permite agregar de la forma: objeto.property . Si es con corchetes es porque property es una variable (?  no lo se
  return objeto ;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" contiene el nombre de un método (funcion) en el objeto
  // "metodo" es una cadena  que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned") . SOLO INVOCAR, no return ni console.log
  // Tu código:

  /* var objeto = {
    metodo: function() {
          aca se escribiria el codigo del metodo , pero no piden eso
    }
  };
  */

  objeto[ metodo ](); // no se porque lo resuelven asi, yo lo hubiera resulto asi objeto.metodo() . Previo console.log(objeto.metodo())
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" es un objeto y tiene una propiedad llamada "numeroMisterioso"
  // "objetoMisterioso"  tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

 /*
 var objetomisterioso = {
    numeroMisterioso: xxxx
 };
 */

  var resultado = objetoMisterioso.numeroMisterioso * 5 ;
  return resultado;

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  /*
    var objeto = {
      unapropiedad: valor
    };
  */

  delete objeto[unaPropiedad]; // tambien se podria resolver asi delete objeto.unaPropiedad , pero piden usar bracket notation
  return objeto ;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:


  var objeto = {
    nombre: nombre,
    email: email,
    password: password
  };
  return objeto;
}

function tieneEmail(usuario) {
  //usuario es un objeto
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  /*
  var usuario = {
    email: 'unmail@hotmail.com'
  };
  */


  if(usuario['email']){  // al usar las comillas hacemos referencia al valor, sino estuvieran hariamos referencia a la propiedad
    return true;
  }
  else{
    return false;
  }
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  /*
    var objeto = {
      propiedad:  'valor'
    };
  */

  if(objeto[propiedad]){ // al NO usar comillas se hace referencia a la propiedad
    return true;
  }
  return false;
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  /*
  var usuario = {
    password: 'valor'
  };
  */

  if(usuario.password === password){
    return true;
  }
  else{
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  /*
  var usuario = {
    password: 'valor'
  };
  */

  usuario.password = nuevaPassword ;
  return usuario;
}


