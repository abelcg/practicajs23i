//declarar una funcion

/* 

function nombreDeFuncion(){
    código a ejecutar
}

*/

function holaMundo() {
    console.log("hola mundo, como estas?");
}

holaMundo();
//invocar, ejecutar o llamr a una funcion

//funciones con parámetros

/* 

function nombreDeFuncion(parametro 1, parametro 2){
    código a ejecutar
}

*/

function saludar(nombre, apellido) {
  console.log(`hola el nombre es: ${nombre} y el apellido es: ${apellido}`);
}

saludar("Abel", "Gonzalez");

// funciones que nos returnan un valor

function convertirDolaresPesos(dolares) {
  let pesos = dolares * 290;
  //siempre la última línea es la del return, despues del return no hay que escribir ninguna linea mas
  return pesos;
}

let precioCelular = convertirDolaresPesos(100);
console.log(precioCelular);
console.log("el precio de la play 5 es " + convertirDolaresPesos(1000));

//ejemplo de funcion con parametros

function sumarValores(valor1, valor2) {
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    console.warn("debe ingresar un valor numerico");
  } else {
    return `${valor1} + ${valor2} = ${valor1 + valor2}`;
  }
}

console.log(sumarValores(8, 2));

console.log(sumarValores(4, 'chau'));

//funciones flecha o arrows fuctions

/* 
let nombreFuncion = ()=>{
    codigo a ejecutar
}

*/

/* let sumar = (num1,  num2)=>{
    return num1 + num2
}
 */

let sumar = (num1,  num2)=> num1 + num2

console.log(sumar(8,5))

//scope de una funcion

let heroe = 'Batman';

function mostrarHeroe(){
    let heroe = 'Superman';
    console.log(heroe)
    return `Bienvenido ${heroe}`
}


console.log(mostrarHeroe())
console.log(heroe)


//funciones anonimas: se declaran como constantes

const square = function (num){
    //Math.pow() calcula potencias de un numero
    return Math.pow(num, 2)
}

let sumSquare = (num1, num2)=>{
    return square(num1) + square(num2)
}
//se puede invocar funciones dentro de otra funcion


console.log(sumSquare(2,5))

/* 
const hola = function (){
    console.log('hola como estas?')
}

console.log(hola()) */






