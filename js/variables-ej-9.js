/* 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

*/

let frase = prompt('Ingrese una frase');
 
for (let i = 0; i < frase.length; i++){

    const caracter = frase.charAt(i);
    
    switch (caracter.toLowerCase()) {
        case 'a':
                document.write(frase.substring(i, i + 1) + '<br>')
            break;
        case 'e':
                document.write(frase.substring(i, i + 1)  + '<br>')
            break;
        case 'i':
                document.write(frase.substring(i, i + 1) + '<br>')
            break;
        case 'o':
                document.write(frase.substring(i, i + 1) + '<br>')
            break;
        case 'u':
                document.write(frase.substring(i, i + 1) + '<br>')
            break;
        default:
            console.log('no ingreso vocales')
            break;
    }

}