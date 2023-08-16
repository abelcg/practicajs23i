//switch: se usan por ejemplo parea reemplazar if else anidados
// varias opciones para elegir

//estructura de un switch

/* 
 switch(opcion){
   case 1 : 
          //todo lo que quiero que se ejecute
   break

   case 2 : 
          //todo lo que quiero que se ejecute
   break
     ....

   default 
        //codigo que se ejecuta por defecto
 }

*/

// permitir al ususario elegir su estación del año favorita

let estacion = prompt(
  "Ingrese su estacion del año favorita según su nro, por ej. 1. verano, 2. otoño, 3. primavera, 4.invierno"
);

switch (estacion.toLowerCase()) {
    case '1':
    case 'verano':
          document.write('Su estación favorita es: verano');
        break;
    case '2':
    case 'otoño':
          document.write('Su estación favorita es: otoño');
        break;
    case '3':
    case 'primavera':
          document.write('Su estación favorita es: primavera');
        break;
    case '4':
    case 'invierno':
          document.write('Su estación favorita es: invierno');
        break;

    default:
         alert('Ingrese una opcion valida')
        break;
}
