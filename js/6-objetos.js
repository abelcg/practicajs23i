//por ej queremos modelar un usuario. Empezamos a describirlo usando variables. Esta aunque describen al usuario
//y están relacionadas a este, está sueltas, necesitamos algo que las contenga. Declaramos el objeto usuario
let nombre = "Abel";
let apellido = "Cordoba";
let email = "abel@gmail.com";
let dni = 32459333;
// Un paradigma de programación es una manera o estilo de programación de software.
//un objeto es una forma de modelar algo de la realidad y puede ser tangible o intangible
//definir o declarar un objeto en forma literal. Veremos dos maneras literal y usando clases aunque exiten otras más

let usuario = {
  //clave: valor | key: value | las calves se le llama propiedades. Describen al objeto
  nombre: "Abel",
  apellido: "Cordoba",
  email: "abel@gmail.com",
  dni: 32459333,
  //roles: ['admin', 'teacher', 'student'],
  /* curso: {
    nombre: 'Fullstack',
    presencial: false
  }, */
  //metodos

  saludar(){
    return `Hola ${this.nombre} ${this.apellido}`
  },
  isLogged(){
    return true
  }
};

//definir o declarar un objeto vacio en forma literal

let objVacio = {};

//mostrar el objeto en el documento

//document.write(usuario)

//mostrar por consola el objeto

console.log(usuario);

//mostrar una propiedad del objeto. Forma 1. nombreObjeto.propiedad

//document.write("El nombre del usuario es: " + usuario.nombre);

//mostrar una propiedad del objeto. Forma 2. nombreObjeto['propiedad']

//document.write("<br>El apellido del usuario es: " + usuario["apellido"]);

/* 
obs: forma de recorrer un array o cualquier iterable con for... of
*/

let arr = ["hola", "chau", 12, 2, 5];

for (const elemento of arr) {
  console.log(elemento);
}

////fin de la obs////////////////////////

//si queremos aplicar un for...of a un objeto ---> nos dirá que el mismo no es iterable

/* for(const el of usuario){
    console.log('hola');
}
 */
//podemos usar en cambio for..in
document.write("<h5>User</h5>");

for (const prop in usuario) {
  document.write(`<br>${prop} : ${usuario[prop]}`);
}

//mostrar un objeto usando un bucle for tradiciaonal

const mostrarObjeto = () => {
  //usando el método keysdel objeto obtengo un array con sus claves
  let claves = Object.keys(usuario);
  console.log(claves.length);

  document.write("<h5>User</h5>");

  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i];
    let valor = usuario[clave];
    //obtengo el nombre de c/u una de las claves y con ellas puedo obtener c/u de sus valores
    document.write(`<br> ${clave}:${valor}`);
  }
};

mostrarObjeto()

//mostrar el objeto usando su arrays de keys con un for..of

let keys = Object.keys(usuario);

for(const key of keys){
    const value = usuario[key]
    console.log(key, value);
}

//mostrar solo los valores del objeto usando el método values --> devuelve un array de valores
console.log(Object.values(usuario));

//mostrar objeto usando su array de keys y mapeando el mismo

const mapObjt = Object.keys(usuario).forEach((key)=> {
     const value = usuario[key];
     console.log(key, value);
})

//mostrar el objeto usando el método entries ---> deveulve un array de arrays 
//formado con los pares key value

Object.entries(usuario).map(entry =>{
    const [key, value] = entry
    console.log(key, value);
})


//modificar una propiedad 

usuario.nombre = 'Pepe';


mostrarObjeto()

//agregar una nueva propiedad

usuario.rol =['admin','super user', 'moderador']

mostrarObjeto()

console.log(usuario.rol);

delete usuario.dni

mostrarObjeto()

//metodos son las cosas que puede hacer un objeto, sus acciones  y la forma de relacionarse con otros objetos. 
//Son propiedades cuyos values son funciones anonimas
//llamar o invocar un método nombreObjeto.metodo()

console.log(usuario.saludar());

console.log(usuario.isLogged());
