//Callbacks: son funciones que se pasan o envian por parametros en una función
//También llamadas funciones de 1er orden
//Callback: llamdo a la función

//Metodo sort
let abecedario = ["c", "a", "d", "f", "z", "x", "e", "i", "o", "b"];

console.log(abecedario.sort());

let vocales = ["E", "I", "A", "U", "O"];

console.log(vocales.sort());

let letras = ["E", "i", "o", "A", "U", "O", "a", "e"];

console.log(letras.sort());

let numeros = [-37, 11, -2, 15, -26, 52, 48, 78, 8, 105, 257];
console.log(numeros);

console.log(numeros.sort());

console.log(numeros);

//metodos mutables: son los que cambian al arreglo original
//sort muta ala arreglo original

console.log(
  letras.sort(function (a, b) {
    return a - b;
  })
);

//Reverse

let palabras = ["hola", "chau", "buen dia"];

console.log(palabras.reverse());

//ejemplo: si ingresa una palabra por ejemplo 'hola' ---> 'aloh'

const revertirPalabra = (palabra) => {
  return palabra.split("").reverse().join("");
};

console.log(revertirPalabra("hola"));

//Metodo filter
//es mutable: modifica al array original

//ejemplo: devuelvo un array de nros pares
let pares = numeros.filter((num) => {
  return num % 2 == 0;
});

console.log(pares);

//ejemplo: nros mayores a 10

let mayor10 = numeros.filter((numero) => numero > 10);

console.log(mayor10);

//ejercicio: Filtrar de un lista de personas los nombres que contengan la letra 'm'
//contemplar los casos en que los que la letra 'm' sea mayuscula y en los casos donde
// se ingresa espacios al comienzo o final de la letra

//trim(): metodo de string que elimina los espacios (strings vacios) al inicio y final de la
// cadena ed caracteres
let personas = [
  "Joaquin",
  "Abel",
  "Mariano",
  "Emmanuel",
  "Mirta",
  "Ambar",
  "Horacio",
];

const nombresFiltrados = (letras) => {
  let nombres = personas.filter((nombre) =>
    nombre.toUpperCase().trim().includes(letras.toUpperCase().trim())
  );
  return nombres;
};

console.log(nombresFiltrados(" m "));

console.log(nombresFiltrados("Quin"));


//find
//devuelve el premier elemento que cumple con la condición o undefined

let alumnos = ['Juan', 'Pedro', 'Carla', 'Pablo', 'Juan', 'Juan Cruz', 'Juan']

let resultadoBusqueda = alumnos.find(alumno => alumno === 'Juan');

console.log(resultadoBusqueda)

