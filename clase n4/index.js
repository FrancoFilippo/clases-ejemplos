// FUNCIONES = son bloque de codigo que realizan una tarea especifica y pueden ser reutilizados en diferentes bloques


//las funciones tienen que tener el nombre de la accion que van a ejecutar, suelen ser VERBOS y se declaran con camelCase.


// function saludar(){

         //se ejecutan las intrucciones de la funcion
//     console.log("hola! bienvenido.")
// }

// todas las funciones se llaman para poder ser ejecutadas 

// saludar();
// saludar();

//LAS FUNCIONES TIENEN LA POSIBILIDAD DE ACEPTAR PARAMETROS Y ARGUMENTOS 


//se incorpora un parametro que va a recibir el valor que se aplique en el argumento
// function saludarPersona(nombre){
//     console.log("hola, " + nombre + " ¿como estas?")
// }


//el argumento se ejecuta cuando se incorpora un valor dentro de la funcion
// saludarPersona("Gilberto");


// ! ejemplo 1

//scoupe o ambito o alcance
// el concepto habla sobre lo visible y lo accesible de una variable dentro de un programa





// variable de tipo global = son variables que se pueden llamar en cualquier bloque de codigo

// let ingresoDeNombre = prompt("Ingrese su nombre")

// function ingresarNombre(nombre){

//     console.log("el nombre del sujeto es: " + nombre)
// }

// ingresarNombre(ingresoDeNombre);

// ! el remix del ejemplo 1 
//variable del tipo local = son variables que solamente van a vivir dentro del bloque donde fueron creadas

// function ingresarNombre(){
//     let ingresoDeNombre = prompt("Ingrese su nombre")
//     console.log("el nombre del sujeto es: " + ingresoDeNombre)
// }

// ingresarNombre();


// let ingresoDeNombre = prompt("Ingresar su nombre");
// let ingresoDeApellido = prompt("Ingresar su apellido");
// let IngresoDeEdad = parseInt(prompt("Ingrese su edad"));

// function IngresoDeDatos(nombre, apellido, edad){
//     console.log("El nombre del sujeto es: " + nombre + ", el apellido es: " + apellido + " y tiene: " + edad + " años")
// }

// IngresoDeDatos(ingresoDeNombre, ingresoDeApellido, IngresoDeEdad);