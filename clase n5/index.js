// ! OBJETOS

// un objeto es una estructura de datos qyue se utiliza para almacenar y organizar informacion
//los objetos poseen claves y valores

/*                  
en una silla         valor
cantidad de patas: 4
color de silla: marron
tipo de madera: algarrobo

*/

// descripcion de silla

//let sillaPatas = 4;
//let sillaColor = "rojo"
//let sillaMadera = "algarrobo"



// let silla = {

//     patas: 4,
//     color: "rojo",
//     madera:"algarrobo"

// };

// console.log(silla);
// console.log(silla.madera);


// const alumno = {
//     nombre:"",
//     apellido:"",
//     comision:""

// };


 //agregar datos a un objeto vacio
// alumno.nombre = "Franco";
// alumno.apellido = "Filippo";
// alumno.comision = "javascript"

// console.log(alumno)


//modificar datos de un objeto vacio
// alumno["nombre"] = "Roberto"

// console.log(alumno)

// ! objetos constructores = function constructora, funcion que se utiliza para crear unstancias de objetos. son imoportantes en la programacion orientada a objetos 
// ! y se utiliza para definir y crear objetos con propiedad, y metodos especificos.

// como se crea

// 1- es que la primera letra de la funcion esta en mayuscula = PascalCase
// 2 todas las funciones se abren parentesis y pasan parametros


// function Alumnos (lista, nombre, apellido, comision){
//         this.lista = lista
//         this.nombre = nombre
//         this.apellido = apellido
//         this.comision = comision
// }

// const ALUMNO_UNO = new Alumnos(1,"Franco","Filippo","javascript")
// const ALUMNO_DOS = new Alumnos(2,"Barbara","Bravo","javascript")


// console.log(ALUMNO_UNO,ALUMNO_DOS)


// ALUMNO_DOS.nombre = "Roberto"

// console.log(ALUMNO_DOS)

// ! metodos y operaciones con objetos
// cuandos hablamos de esto hacemos referencia a accciones o funciones que pueden realizarse en los objetos

// let coche ={
//     marca: "honda",
//     modelo: "civic",
//     arrancar: function(){
//         console.log("el coche esta arrancando")
//     }
// }

// coche.arrancar();

//comercio = id, nombre, precio, stock

// const IVA = 1.21; 

// function Producto(nombre, precio, stock){
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
//     this.precioConIVA = function(){
//         let precioFinal = this.precio * IVA 
//         return "$" + precioFinal
//     }
// }


// const PRODUCTO_UNO = new Producto("arroz", 800, 2);

// console.log(PRODUCTO_UNO)

// console.log(PRODUCTO_UNO.precioConIVA())

//operador in = se utiliza para verificar si una propiedad especifica existe en el objeto

// let persona ={
//     nombre: "pablo",
//     edad: 30
// }

// if("nombre" in persona){
//     console.log("La propiedad in esta dentro del objeto")
// }else{
//     console.log("no existe dicha propiedad")
// }

//bluce for...in = la utilizamos para iterar sobre las propiedades enumerables de un objeto.


//  let persona ={
//      nombre: "pablo",
//     edad: 30
//  };

//  for(let propiedad in persona){
//     console.log(propiedad + ":" + persona[propiedad]);
//  }

//clases en JavaScript

//1 = definir el objeto
//2 = definir propiedades y metodos
//3 = podemos declarar herencia

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }

} 

const PERSONA1 = new Persona("maxi", 31)
const PERSONA2 = new Persona("Franco", 33)

PERSONA1.saludar();
PERSONA2.saludar();