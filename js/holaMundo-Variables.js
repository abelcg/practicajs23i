console.log("Hola Mundo");
// comentario de una sola línea -----> continua el comentario

console.log('Luego del comentario "texto" ');

console.log(`Esto es un "texto de prueba"`);

/* 
Comentario de varias
líneas

Aqui sigue el comentario
*/

//mostrar mensajes en nuestro documento html

//document.write("Hola mundo");

//definición de variables / asignación de variable

let numero = 5;  //el signo de = es el operador de asignación
console.log(numero)

let numero2 = 8;

console.log(numero2)

numero2 = numero // re asignando un valor a una variable

console.log(numero2)


//al definir variables no usar caracteres especiales 
let anio = 2022

let anio_pasado = 2021

let nombreApellido = 'Abel Cordoba' // notación en camelcase



//constantes

const palabra = 'hola' // las constantes son 'inmutables' es decir no se le puede reasignar otro valor

console.log(palabra)

//palabra = 'chau'


//scope: el ambito donde vale una variable

//var numero = 10; 

//Tipos de datos

// tipo de dato string 

// defino un string vacio
let stringVacio = ""

let numberString = '8'

let numberString2 = "10"

console.log(numberString)

console.log(numberString2)

//document.write(numberString + numberString2) //en string el simbolo de + es el signo de concatenación.
// Concatenar significa unir

document.write(numberString + " " + numberString2 + "<br>" )


//Tipo de dato Number

let num = 10;

let number = 20;

console.log(num + number)

document.write('<h4>La suma de los numeros es</h4><br>')
document.write(number+num)


//Tipo de datos booleano

let verdadero = true;
console.log(verdadero)

let falso = false;


console.log(!verdadero) // negación, con el operador !

