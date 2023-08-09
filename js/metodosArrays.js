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
//sort muta al a arreglo original

console.log(
  numeros.sort(function (a, b) {
    return a - b;
  })
);

//si quiero que ordene de mayor a menor es return b-a

console.log(
  letras.sort(function (a, b) {
    return a - b;
  })
);

//Tarea: en una curso queremos ordenar los alumnos alfabeticamente pra tomar asistencia

let students = [
  "Juan",
  "Carlos",
  "Carla",
  "Ezequiel",
  "Ana",
  "Omar",
  "Soe",
  "Abel",
];
console.log(students.reverse());

const orderStudent = (array) => {
  let studentsOrdered = array.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return studentsOrdered;
};

console.log(orderStudent(students.reverse()));

//Reverse

let palabras = ["hola", "chau", "buen dia"];

console.log(palabras.reverse());

//ejemplo: si ingresa una palabra por ejemplo 'hola' ---> 'aloh'

const revertirPalabra = (palabra) => {
  return palabra.split("").reverse().join("");
};

console.log(revertirPalabra("hola"));

//Tarea
/* 
Métodos básicos de arreglos
Declara un array que vamos a llamar “clasificaciones” 
con los siguientes valores: Ana, Oswaldo, Raúl, Celia, María, Antonio 
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
Imprime la clasificación actual
El concurso continua, y se van modificando esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

*/

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
//Imprime la clasificación actual
console.log(clasificaciones);

//Celia adelanta a Raúl
clasificaciones.splice(2, 2, "Celia", "Raúl");
console.log(clasificaciones);

//Antonio es descalificado y se elimina del concurso
clasificaciones.pop();
console.log(clasificaciones);

//Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
clasificaciones.splice(1, 0, "Roberto", "Amaya");
console.log(clasificaciones);
//Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificaciones.unshift("Marta");
//Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
console.log(clasificaciones);

const eliminarConcursante = (arr, name) => {
  let posicion = arr.findIndex((concursante) => {
    return concursante === name;
  });

  if (posicion > -1) {
    arr.splice(posicion, 1);
  } else {
    console.log("No se encontro ningun concursante");
  }
};

console.log(eliminarConcursante(clasificaciones, "Celia"));
console.log(clasificaciones);

//Metodo filter
//es mutable: modifica al array original

//ejemplo: devuelvo un array de nros pares positivos
let pares = numeros.filter((num) => {
  return num % 2 == 0 && num > 0;
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

let alumnos = ["Juan", "Pedro", "Carla", "Pablo", "Juan", "Juan Cruz", "Juan"];

let resultadoBusqueda = alumnos.find((alumno) => alumno === "Juana");

console.log(resultadoBusqueda);

//Métodos inmutables

//metodo inmutable
//map --> devuelve un nuevo arreglo con los resultados de aplicar un llamado a la funcion (callback)
//a cada uno de elemnetos del array

let numerosDobles = numeros.map((num) => num * 2);

numeros;
numerosDobles;
numeros;

//map sirve para hacer una copia o 'clon' del array originally

let copyStudents = students.map((students) => students);

copyStudents;
students;

//forEach --> no muta el arreglo original y no genera un nuevo array
// Si quiero guardar / copiar en un nuevo array uso map, si no uso forEach
// forEach nos permite también recorrer el array aplicando una funcion a cada elemento

students.forEach((students) => {
  let nameToUpperCase = students.toUpperCase();
  console.log(nameToUpperCase);
});

//concat une dos arrays
//unir dos array usando spread operator

let arraysJoin = [...students, ...numeros];
arraysJoin;

//Some ---> devuelve true si encuentra un elemento que cumple con la condicion, si no false
let fruits = ["🍎", "🍌", "🍐", "🍇"];

console.log(fruits.some((fruit) => fruit === "🍉"));

//fill --> llena el array con lo que le pase por parametro
// fill si es mutable!!!!

let apples = ["🍎", "🍌", "🍐", "🍇", "🍉"];
apples.fill("🍎");

//Every ----> devuelve true si todos los elementos cumplen con la condicion, si no false

console.log(apples.every((apple) => apple === "🍎"));

//reduce: metodo que me devuelve un valor resultado de aplicar a cada elemento un callback

let numbers = [1, 2, 5, 6, 10];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);

sum;

//usando reduce generamos un array con elementos unicos

let array = [18, 8, 9, 18, 18, 3, "4"];

let arrayClone = [...array];

arrayClone;

let uniqueArray = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);

//TAREA: Encontrar el elemento más grande de un arreglo iterando una sola vez

const getBiggest = (array) =>
  array.reduce((acc, item) => (acc > item ? acc : item));

const result = getBiggest([50, -1500, 10, 10, 1, 55]);

result;

//TAREA: Generar una función que iterando una sola vez un array elimine todos los
// undefined, false, 0, null, '' y devuelva un array sin estos.
// [false, '', 8, 'hola', undefined, null, 77] ---> [8, 'hola', 77]
// undefined, false, 0, null, '' se evaluan como false

const clean = (arr) => {
  return arr.reduce((acc, val) => {
    if (val) {
      acc.push(val);
    }
    return acc;
  }, []);
};

const cleaned = clean([1, undefined, null, 0, 2, '151', '', 'hola',false])
cleaned;



//Generar un array con elementos únicos usando filter

let arreglo = [5, 8, 8, 45, '77', 'hello', 'world', 'hello', '🍉', '🍉']

let elementosUnicos = arreglo.filter((item, index)=> arreglo.indexOf(item) === index) 
elementosUnicos;
