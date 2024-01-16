// aoaooaoa

/* 

para hacer comentarios

*/

//variables = espacio de memoria que guarda diferentes tipos de datos

// existen 3 maneras de escribir variables = var (no se usa pero existe) 
//let y const

//let se utiliza para declarar variables que pueden ser reasignadas
//let tiene ambito de bloque, que la variable solo es valida dentro del bloque en el que se declara

// estructura de una variable

// que es camelcase? (joroba de camello) es una manera que tenemos estandarizada los programadores para escribir codigo: nombreDeLaVariable y no Nombre de La Variable.

// let nombreDeLaVariable = valor; 

// que tipos de valores podemos encontrar alojados en una variable;

//let numero = 15; 
//let cadenaDeTexto = "FRANCO FILIPPO"; //string
//let booleanos = true; //boolean (datos que pueden ser verdaderos o falsos)

//que mas se peude alojar en una variable?

//arreglos o arrays - objetos u objects - datos (nulo o null) - datos (indefinido o undefined) - funciones o function. 

//const o constante = se utiliza esta variable cuando el valor no necesita ser reasignado, valor que se mantiene en el tiempo de mi codigo.
// al igual que let, consta tambien va a vivir en el bloque de codigo en el cual se cree

//sanke_case = es una convencion que tambien utilizamos en el desarrollo de las aplicaciones. hola_como_estas no hola como estas.

//const NOMBRE_APELLIDO = "FRANCO FILIPPO";

//declaracion e inicializacion

//declaracion

//estoy reservando simplemente el nombre de la variable, y no le asignamos un valor.
//despues nosotros podemos inicializarlo cuando querramos
//let edad; 

// incializacion = es el proceso en el cual asignamos el valor inicial de la variable.

//let edad; 

//edad = 25; 

//las variables tienen que tener asignado un nombre que haga referncia al dato almacenado.  

//console.log = es una funcon de javascript que lo que hace es imprimir mensajes en la consola del navegador o en entornos donde se ejecute js.

//let numeroUno = 6; 
//let numeroDos = 5; 

// console.log(numeroUno); (muestra un 1 en la consola)

// las operaciones basica dentro de js
// son las operaciones aritmeticas (sumar, restar, multiplicar, dividir o resto nulo)

//let suma = numeroUno + numeroDos; 

//console.log(suma);

//let resta = numeroUno - numeroDos; 

//console.log(resta);

//let multiplicar = numeroUno * numeroDos; 

//console.log(multiplicar);

//let division = numeroUno / numeroDos; 

//console.log(division); 

//let resto = numeroUno % numeroDos; 

//console.log(resto); 

// concatenacion = es un string (cuando nosotros podemos unir valores de tipo de string, osea texto, alojado en variables)

// let nombre = "franco";
// let apellido = "filippo";

// let nombreCompleto = nombre + " " + apellido;

// console.log(nombreCompleto)

//prompt, consola y alert

// prompt = funcion que nos va a mostrar un cuadro de dialogo en el cual el usuario puede interactuar

let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido") 

let nombreCompleto = nombre + " " + apellido

console.log("hola ¿como estas?", nombreCompleto);

//alert = tambien es una funcion de js que nos muestra un cuadro de dialogo

alert("hola ¿como estas? "+ nombreCompleto); 