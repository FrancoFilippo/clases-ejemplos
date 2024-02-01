// abstraccion manera que tenemos de reducir la complejidad de un codigo permitiendonos implementar maneras y diseños 
//mas eficientes en los datos.


//ventajas

// evitar codigo duplicado
// podemos crear multiples instancias con una sola abstraccion 
// vamos a poder encapsular datos
// evitar codigo de bajo nivel  ( mejores practicas )

// funcion para sumar un numero

// function sumar(a, b){

//     return a + b
// }

// let resultado = sumar(10,3)
// console.log(resultado)

// //funciones de orden superior = HOF, high order function

// function mayorQue(x){
// return( num) => num > x;

// }

// const mayorQueDiez = mayorQue(10);
// const mayorQueVeinte = mayorQue(20);

// console.log(mayorQueDiez(9))

//funciones que oiseen funciones 

// function asignacionOperacion(operacion){
//     if(operacion === "sumar"){
//         return function(num1,num2){
//             return num1 + num2
//         }
//     }else if(operacion === "restar"){ 
//             return function (num1,num2){    
//                 return num1 - num2
//             } 
// }   
// }

// let sumar = asignacionOperacion("sumar");
// let restar = asignacionOperacion("restar");

// console.log(sumar(4,6))

//funciones pasadas por parametros 

//callback => es una fucnion  que se pasa como argumento a otra funcion
// y se ejecuta despues de que ocurra algun evento especifico

//callbacks = van a ser fundamentales cuando trabajen funciones asincronas y eventos.

// function porCadaUno(arr, fn){
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }

// const numeros = [0, 1,2,3,4]
// porCadaUno(numerosconsole.log())

//forEach = lo utilizams para iterar sobre un array

// const letras = ["a", "b","c"]

// letras.forEach(pepito => console.log(pepito))

const numeros =[1,2,3,4]

numeros.forEach(function(numero){
    const resultado = numero *2;
    console.log(resultado)
})