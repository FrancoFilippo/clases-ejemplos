// arrays =  listas indexadas. Listas que pueden contener datos de tipo numerico, strings, objetos y funciones, otros arrays.
// todos los indices de arrays comienzan en 0
// let productos = ["arroz", "banana", "fideos", "gaseosa"]; //array de string
// let numeros = [1,2,3,4,5,6];
// let boolean = [true, false, false, false]
// let popurri = ["arroz", 1, true]

// const USUARIOS = [
//     {nombre: "maxi",
//      apellido: "filippo",
//      edad: 20
//     },
//     {
//      nombre:"franco",
//      apellido: "filippo",
//      edad: 25
//     }
// ]

// console.log(productos)

//accedemos a uno de los valores que contiene el array a traves de su indice.
// console.log(productos[3])

// console.log(USUARIOS[1])

// let productos = ["arroz", "banana", "fideos", "gaseosa"];
// for(let i = 0; i < 4; i++){
//     console.log(productos[i]);
// }

// LENGHT = ES UN METODO, QUE NOS VA A PROPORCIONAR EL DATO DE LA CANTIDAD DE ELEMENTOS QUE CONTIENE EL ARRAY

// let productos = ["arroz", "banana", "fideos", "gaseosa"];
// let cantidadDeProductos = productos.length;
// console.log("la cantidad de productos que posee el array es: " + cantidadDeProductos)

// let texto = "mundoCoder"
// let longitudTexto = texto.length
// console.log(longitudTexto)

//PUSH = agrega uno o mas datos al final del array

// let numero = [1,2,3];

// numero.push(4);

// console.log(numero)

// pop = elimina el ultimo elemento de un array

// let actualizarNumero = numero.pop()

// console.log(actualizarNumero)
// console.log(numero)

//shift = elimina el primer elemento de un array

// numeroeliminado =numero.shift();
// console.log(numero);

//splice = este metodo nos sirve para agregar, eliminar o reemplazar elementos en un array

// let colores = ["rojo", "naranja", "amarillo"];

// colores.splice(1, 2, "azul");
// console.log(colores);

//splice = (indice, cantidad el tipo de dato)


//join = conviertelos elementos de un array en una cadena de texto y los une utilizando separadores especificos especificados por nosotros

// let colores = ["rojo", "naranja", "amarillo"];

// let stringColores = colores.join("+");
 
// console.log(stringColores);

//concat = nos permite combinar 2 o mas arrays en uno nuevo

// let autos = ["honda", "toyota", "nissan"];

// let masAutos = autos.concat(["liffa", "cherry"]);

// console.log(masAutos);

//slice = nos permite sacar una porcion de un array y crear un array con eses elementos que sacamos

//array.slice(posicioninicial, posicion final no incluida)

// let array = [1,2,3,4,5]

// let parteDelArray = arrayNumero.slice(1,4);

// console.log(parteDelArray)

//indexOf = busca la primera aparicien de un elemento en un array y devuele su infica

// let fruta = ["manzana", "banana", "frutilla", "naranja", "manzana"];

// let indice = fruta.indexOf("manzana");

//podemos tambien indicarles desde que indice inician
// let indice = fruta.indexOf("manzana", 3);

// console.log(indice);

//includes = nos dice si un valor esta incluido en el array, el dato lo muestra de manera booleana
//si eszta dentro, da true, si no esta, da falso.

// let estaEnFrutas = fruta.includes("manzana")
// console.log(estaEnFrutas)

// let frutaDadaVuelta = fruta.reverse();

// console.log(frutaDadaVuelta)

//unshift = nos permite agregar elementos al inicio del array 
//pero desplaza los que existe

// let fruta = ["manzana", "banana", "frutilla", "naranja", "manzana"];

// const NUEVO_ARRAY = fruta.unshift("kiwi");
// console.log(NUEVO_ARRAY);
// console.log(fruta);

//! ARRAY DE OBJETOS son estructuras que nos permiten almacenar colecciones de objetos, en un solo lugar

// const PERSONAS = [
//     {nombre: "pedro", edad: 30},
//     {nombre: "alanis", edad: 20},
//     {nombre: "lucas", edad: 12},
//     {nombre: "juan", edad: 37},

// ]

// console.log(PERSONAS) 

// // FOR.. OF

// for(const personaObjetos of PERSONAS){
//     console.log(personaObjetos);
// }

//! ejercicio uno

const PERSONAS = [
    {nombre:"juan", edad: 30},
    {nombre:"perdo", edad: 25},
    {nombre:"pepo", edad: 35},
    ]   
    function calcularPromedioEdades(arrayPersonas){

        let sumaEdades = 0;

        for(let i = 0; i <arrayPersonas.length; i++){
            sumaEdades += arrayPersonas[i].edad;
        }
        const PROMEDIO = sumaEdades / arrayPersonas.length;
        return PROMEDIO; 
    }

    const PROMEDIO_EDADES = calcularPromedioEdades(PERSONAS);
    console.log("el promedio es: " + PROMEDIO_EDADES)

