// Arrays o arreglos


//crear un arreglo con vacio de forma literal 

let arreglo = [];

//crear un arreglo con datos de forma literal 

let serie = ['Naruto', "Juego de Tronos", 3, 4 , true]

console.log(serie)

//crear un array vacio usando el constructor de array

let array = new Array();

console.log(array)
//crear un array usando el constructor de array

let array2 = new Array(1,2,8,5);

console.log(array2)


let array3 = [1,2,3]

//obtener o mostrar un elemento del Array

console.log(array3[5])

//cantidad de elemento del array
console.log(array3.length)

//obtener el último elemento del array
console.log(array3[array3.length - 1])

//reasignar el valor a un determinado elemento del array

array3[0] = 4;

console.log(array3)

array3[5] = 'hola'

console.log(array3)

console.log(array3[3])

console.log(array3.length)

//agregar el elemntos en la última posición o al último

array3.push('chau')

console.log(array3)

//eliminar o sacar del arreglo el último elemento

array3.pop()

console.log(array3)

//agregar un elemento en la primera posición

array3.unshift('martes')

console.log(array3)

//elimianr o sacar el elemento de la primera posición

array3.shift()

console.log(array3)

//agregar elementos en una determina posicion

array3.splice(3, 0 , 5)

console.log(array3)

//elminar elementos en una determina posicion

array3.splice(4,2)

console.log(array3)

//eliminar todos los elementos desde una determina posicion

array3.splice(1)

console.log(array3)

array3.splice(1, 0, 3,2,1)

console.log(array3)

//seleccionar elementos de un array

console.log(array3.slice(1,4))

//recorrer y/o mostrar los elementos del array

for(let i = 0; i < array3.length; i++){
    console.log(array3[i])
}

//recorrer y/o mostrar los elementos del array usando for..of

for(let elemento of array3){
    console.log(elemento)
}

//recorrer y/o mostrar los caracteres de un string usando for..of

let word = 'palabras'

for(let letra of word){
    console.log(letra)
}

//operador spread 

console.log(...array3)

console.log(...word)

// dado un arreglo de edades encontrar el mayor 

let edades = ['45', '12', '88', '41']

console.log(Math.max(...edades))

//encontrar minimo
console.log(Math.min(...edades))


//convertir string a un array 
console.log(word.split(''))

let palabra = 'hola';

//otra forma de convertir o parsear un atring a un array

console.log(Array.from(palabra))

let vocales = ['a', 'e', 'i', 'o', 'u' ]

let arrayWord = word.split('')

//convertir el array en un string
console.log(vocales.join(','))

console.log(arrayWord.join(""))

//convertir el array a un string
let word2 = ['mundo', "hola"]

console.log(String(word2))

//concatenar o unir dos array

console.log(array3.concat(vocales))

//otra forma de concatenar arreglos con spread operator

let numeros = [78,45,12,0]

console.log([...vocales, ...numeros])

//conocer el indice de un elemento del array usando indexOf
//indexOf devuelve la posicion del 1er elemento que cumple la condición dada o si no lo encuentra o cumple
//devuelve -1

console.log(arrayWord)

console.log(arrayWord.indexOf('a'))

//saber si esta incluido como elemento de un array usando método includes
//includes returna un booleano, true si esta incluido y false si no lo esta

console.log(arrayWord.includes('a'))

