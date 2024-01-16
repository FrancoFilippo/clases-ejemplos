//condicionales = estructuras de control de control de flujo que nos van a permitir tomar decisiones
//nos van a servir para ejecutar diferentes bloques de codigo y en las conficiones se esperan,
//que las condiciones sean verdaderas o falsas

// estructura if = es una construccion fundamental para la toma de decisiones. Evalua expresiones o condiciones y siempre va a evaluar verdadero.

/* if (condicion booleana) {

} */

//operadores de comparacion o relacionales =

// let variable1= 2; //esto es un numero
// let variable2= "2"; //esto es un string

 // x == y  (operador de igualdad) evalua el valor guardado pero no la va a importar el tipo de dato

// if( variable1 == variable2){
//     console.log("son lo mismo para este operador");
// }

 // x === y (es estrictamente igual) el valor guardado y va a evaluar que el tipo de dato sea igual

// if( variable1 === variable2){
//     console.log("son lo mismo para este operador");
// }

 // != operador que refiere que es distinto el dato

 // !== este operador va a evaluar no solo que sea diferente el dato sino que tambien el tipo

// if( variable1 != variable2){
//     console.log("no son lo mismo para este operador");
// }

// if(variable1 !== variable2){
//     console.log("no son lo mismo para este operador")
// }

// let variable3 = 8
// let variable4 = 9

// “>” (mayor)
// “<” (menor)
// >= mayor  o igual
// <= menor o igual


/* if(variable3 >= variable4){
    console.log("son iguales los numeros")
}else{
    console.log("no son iguales los numeros")
} */


//estructura llamada else .. if (nos va a servir para evlauar multiples condiciones de manera secuencial)

/* let numero = prompt("ingresa tu numero")

if(numero > 0){
    console.log("el numero es positivo")
}else if(numero < 0){
    console.log("el numero es negativo")
}else{
    console.log("el numero es 0")
} */


//un programita que evalue la edad de una persona en caso de que quiera conducir

/* let EDAD = prompt("Ingrese su edad")

if(EDAD >= 17 ){
    console.log("Tiene la mayoria de edad para conducir");
}else{
    console.log("no tiene la edad suficiente para poder conducir");
} */

//operadores logicos

//&& que es? significa operador. Este operador devuelve verdadero si ambas expresiones son verdaderas.

//las tablas de verdad tienen sosten en la medicion de booleanos. true or false


//   a    / b      /   a && b
// true  /  true  /  true
// true / false   / false
// false / false  / false
// false / false  / false

// let EDAD1 = 18;
// let tieneLicencia = false;

//manejar auto = 1er condicion (tiene que ser mayor de edad) 2da condicion (tiene que tener registro)

// if(EDAD1 >= 18 && tieneLicencia == true){
//     console.log("puede conducir")
// }else{
//     console.log("la persona no puede conducir")
// }

//OPERADOR LOGICO OR () = devuelve verdadero si solo 1 de los 2 elementos a evaluar es verdadero

// a    /   b    /  a//b
// true / false / true
//true / true / true
// false / true / true
// false / false / false

// let EDAD = 18
// let tieneMultas = false;

// if(EDAD >18 || tieneMultas == true){
//     console.log(" puede manejar")
// }else{
//     console.log("no puede manejar")
// }

//operador logico "no" (se expresa con un !) lo vamos a utilizar para invertir el valor de la condicion

//condicion true = false
//condicion false = true

//verificar si el usuario no esta bloqueado

// let usuarioBloqueado = false

// if(!usuarioBloqueado){
//     console.log("el usuario tiene acceso")
// }else{
//     console.log("el usuario esta bloqueado")
// }

// let nombreIngresado = prompt("ingresar nombre")

// if((nombreIngresado !="") && ((nombreIngresado == "EMA" ) || (nombreIngresado == "ema"))){
//     alert("Hola ema");
// }else{
//     alert("error: ingresar nombre valido");
// }


              // !=EJERCICIO N1 DE LA TAREA CLASE 2
/*
let estaRegistrado =  prompt("Esta registrado? responde con si o no");
let esMayorDeEdad = prompt("¿es mayor de edad? responde con si o no");

if(estaRegistrado === "si" && esMayorDeEdad === "si"){
    console.log("bienvenido a la web")
}else{
    console.log("acceso denegado")
}
 */ 


// if(estaRegistrado && esMayorDeEdad >= 18 ){
//     console.log("bienvenido a la pagina")
// }else{
//     console.log("acceso denegado")
// }

            // !=EJERCICIO N2 DE LA TAREA CLASE 2       

// let enStock = true 
// let enDescuento = true

// if(enStock == true || enDescuento == true){
//     console.log("Producto disponible");
// }else{ 
//     console.log("Producto agotado")
// }


            // !=EJERCICIO N3 DE LA TAREA CLASE 2


// let inicioSesion = true

// if(inicioSesion == false){
//     console.log("Debe iniciar sesion")
// }else if(inicioSesion == true){
//     console.log("Bienvenido Usuario")
// }


            // !=EJERCICIO N4 DE LA TAREA CLASE 2

// let USUARIO =  prompt("Ingrese el usuario")
// let CONTRASEÑA = prompt("Ingrese la contraseña")

// if(USUARIO === "admin" && (CONTRASEÑA === "123456" || CONTRASEÑA === "secreta")){
//         console.log("bienvenido usuario!")
// }else{
//     console.log("Username/password incorrect")
// }
