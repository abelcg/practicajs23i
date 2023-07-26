/* 
10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

*/

let filas = parseInt(prompt("Ingrese un nro de filas"));
let columnas = parseInt(prompt("Ingrese un nro de columnas"));

let totalCeldas = filas * columnas;

document.write("<table border>");
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  //aqui dibujo las filas
  document.write("<tr>");
  //dibujar las celdas
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write("<td>" + totalCeldas + "</td>");
    totalCeldas--;
  }
  document.write("</tr>");
}
document.write("</table>");
