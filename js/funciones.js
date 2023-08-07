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
//invocar, ejecutar o llamar a una funcion

//funciones con parámetros

/* 

function nombreDeFuncion(parametro 1, parametro 2){
    código a ejecutar
}

*/

// podría haber definido antes let nombre  = pepe y no pasarlo como parametro y usarlo directamente

/* 
se pueden poner parametros por defecto function saludar(nombre, apellido= 'gomez') y si no ingreso el 
parametro apellido saludar('Abel) muestra Abel Gomez
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

console.log(sumarValores(4, "chau"));

//funciones flecha o arrows fuctions: se pueden definir con let si quiero reasignarle el valor en un futuro
//pero por lo gral como no cambiaran se unsa const

/* 
const nombreFuncion = ()=>{
    codigo a ejecutar
}

*/
//permiten obvair en algunos casos las {} y el return
/* const sumar = (num1,  num2)=>{
    return num1 + num2
}
 */

//una diferencia con las tradicionales es que no las puede invocar antes de su inicialización

const sumar = (num1, num2) => num1 + num2;

console.log(sumar(8, 5));

//scope de una funcion: si esta dentro de un bloque ahí nace y muere es variable

let heroe = "Batman";

function mostrarHeroe() {
  let heroe = "Superman";
  console.log(heroe);
  return `Bienvenido ${heroe}`;
}

console.log(mostrarHeroe());
console.log(heroe);

//funciones anonimas: se declaran como constantes

const square = function (num) {
  //Math.pow() calcula potencias de un numero
  return Math.pow(num, 2);
};

const sumSquare = (num1, num2) => {
  square(num1) + square(num2);
};
//se puede invocar funciones dentro de otra funcion

console.log(sumSquare(2, 5));

/* 
const hola = function (){
    console.log('hola como estas?')
}

console.log(hola()) */

//tarea realizar una funcion que nos permita realizar las funciones de suma, resta, multiplicación y division

const calculadora = (valor1, valor2, operador = '+') => {
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    console.warn("debe ingresar un valor numerico");
  }
  switch (operador) {
    case "+":
      return `${valor1} + ${valor2} = ${valor1 + valor2}`;
    case "-":
      return `${valor1} -${valor2} = ${valor1 - valor2}`;
    case "*":
      return `${valor1} * ${valor2} = ${valor1 * valor2}`;
    case "/":
      return `${valor1} / ${valor2} = ${valor1 / valor2}`;
    default:
      return 'Ingrese un operador valido'
  }
};

console.log(calculadora(1,0, '/'))




/* 
En JavaScript, los términos "función flecha" y "función anónima" 
a menudo se usan de manera intercambiable, 
pero en realidad se refieren a conceptos ligeramente diferentes. 
Permíteme explicarte las diferencias entre ellos:

Función Flecha (Arrow Function):
Las funciones flecha son una forma más concisa de escribir funciones en JavaScript, introducidas en ECMAScript 6 (ES6). Se caracterizan por la sintaxis reducida utilizando la notación de flecha (=>). Las principales diferencias y características de las funciones flecha son:

Sintaxis concisa: Las funciones flecha permiten evitar la palabra clave function, 
las llaves {} y la declaración return en algunos casos.


Función Anónima:
Una función anónima es simplemente una función que no tiene un nombre definido. 
Pueden ser creadas en cualquier lugar donde se espera una expresión de función. No están limitadas a la sintaxis de función flecha, sino que también pueden ser definidas utilizando la sintaxis tradicional de funciones en JavaScript.
Ejemplo de función anónima usando sintaxis tradicional:

javascript
Copy code
const resultado = function(x) {
  return x * 2;
};
En resumen, todas las funciones flecha son funciones anónimas, 
pero no todas las funciones anónimas son funciones flecha. 
Las funciones flecha son un subconjunto de las funciones anónimas con características específicas en términos de sintaxis y manejo de this. Las funciones anónimas pueden ser definidas tanto con la sintaxis 
de función flecha como con la sintaxis tradicional, dependiendo de tus necesidades y preferencias.



*/
