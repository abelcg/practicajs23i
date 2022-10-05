//while

/* 

while(condición lógica){

    //código que quiero ejecutar

    variable p/ cambiar la condición logica
}

*/

let contador = 2;

while (contador <= 20) {
  document.write("Elemento" + contador + "<br>");
  //contador = contador + 2;
  contador++;
}

//do- while

/* 

do{
    //codigo a ejecutar

    variable p/ cambiar la condición logica
} while(condición logica)

*/

let cont = 50;

do {
  //codigo que quiero ejecutar varias veces

  document.write("Elemento" + cont + "<br>");
  // cont = cont - 1
  cont--;
} while (cont >= 20);

//for

/* 
 for(crear variable; cond log; incrementador o decrementador){

    codigo que que quiero ejecutar varias veces
 }

*/

for (let i = 1; i <= 20; i++) {
  document.write("Estructura for vuelta " + i + "<br>");
}

//recorrer un string usando un bucle
//los strings son iterables y su indice empieza en 0

let palabras = "tomate y manzana";

//cantidad de caracteres de un string o la longitud del string
console.log(palabras.length);

for (let c = 0; c < palabras.length; c++) {
  document.write("letra de las palabras " + palabras.charAt(c) + "<br>");
}


