/* 
3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
*/

//en una sola línea
/* document.write(3+5)

let numero = 3
let num = 5

document.write('<br>') */

// si lo escribo de esta menera estoy convirtiendo los numeros en string
//document.write('el resultado de la suma es' +  numero + numero)

//para transformar o parsear un numero en string 
//console.log(8 + '')


/* 
5.- Escribe un programa de tres líneas que pida un número,
 pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/


/* let number = parseInt(prompt('Ingrese un numero'))  
let otherNum = parseInt(prompt('Ingrese otro numero')) 
document.write(number + otherNum)
 */

//otra forma de parsear strings a number es agragar delante del string un +

/* let numero = '16'

console.log(+numero) */


//Estructuras condicionales

// estructura if

/* 
 if(condicion){

    codigo a ejecutar
 }

*/

/* let numero = 8;
let numero2 = '8';

// comparación estricta => da false
if (numero === numero2) {
    console.log('son iguales')
} */
/* 
let numero = 8;
let numero3 = 8;
 */
// comparación no estricta => da false
/* if (numero == numero3) {
    console.log('son iguales')
}

 */


let saludo = "hola"
let despedida = 'chau'

if (saludo !== despedida) {
    console.log('son distintos mensajes')
} else {
    console.log('son iguales')
}


let edadPablo = 45;
let edadMarcos = 20;
let edadMaria = 10;


if (edadPablo > edadMarcos && edadPablo > edadMaria) {
    document.write("Pablo es el mayor")
} else if (edadMarcos > edadPablo && edadMarcos > edadMaria) {
    document.write("Marcos es el mayor")
} else{
    document.write("Maria es la mayor")
}

//OR: Solo 1 condicion sea true p/ que sea true

//AND Ambas condiciones deben ser true para que sea true la comparación