//clasesson como moldes de objetos.
// Podemos crear o instanciar objetos a partir de su clase.
/*
function Person(){
    this.name = "John",
    this.age = 48,
    this.lastName = "Doe"
}


Esto es equivalente a escribir con notación class
 */

//Es importante que el nombre de la clase se escriba con la primera letra en mayúscula

class Person {
  //es la función constructor. Es la 1er método que se ejecuta cdo creo un obj por medio de la clase
  constructor(nombre, apellido, edad, dni, email, tel) {
    this.name = nombre;
    (this.lastName = apellido),
      (this.age = edad),
      (this.dni = dni),
      (this.email = email),
      (this.tel = tel);
  }

  //los métodos se definen fuera del constructor

  greet() {
    return `Hello, Im ${this.name} ${this.lastName}`;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                        Name: ${this.name}
                        <br>Last Name: ${this.lastName}
                        <br>Age: ${this.age}
                        <br>DNI: ${this.dni}
                        <br>Email: ${this.email}
                        <br>Telephone: ${this.tel}
        `);
  }

  //Propiedades conmutadas o getter y setter
  //get sirven para mostrar las propiedades del objeto

  get showName() {
    return this.name;
  }

  get showLastName() {
    return this.lastName;
  }

  //a continuacion de los getters se definen los setters
  //set me sirve para modificar propiedades de un objeto

  set updateName(newName) {
    this.name = newName;
  }

  set updateLastName(newLastName) {
    this.lastName = newLastName;
  }
}

//Instanciar o crear un objeto: se usa la pálabra new seguido del nombre de la clase
//entre parentesis van los parametros que toma el constructor
//Es muy importante respetar el orden de los parametros

const Pepe = new Person(
  "Pepe",
  "Argento",
  55,
  58522255,
  "pepearg@gmail.com",
  1144585255
);

console.log(Pepe);

//invocamos el método que se encuetra en su clase

console.log(Pepe.greet());
Pepe.showData();

Pepe.name = "Jose";

console.log(Pepe);

//utilizando las propiedades conmutadas
//usando getters

document.write("<br><br>" + Pepe.showName + Pepe.showLastName);

//usando setters

Pepe.updateName = "Pedro";
Pepe.updateLastName = "Picapiedra";

Pepe.showData();

//Herencia

class Alumno extends Person {
  //contructor toma todos los parametros de su constructor padre agregando sus propios parametros
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    curso,
    comision,
    cuotaDia
  ) {
    //invocar al constructor de la clase padre
    super(nombre, apellido, edad, email, dni, tel);
    this.curso = curso;
    this.comision = comision;
    this.cuotaDia = cuotaDia;
  }

  showData() {
    document.write(`<h5>Person: ${this.name}</h5>
                        Name: ${this.name}
                        <br>Last Name: ${this.lastName}
                        <br>Age: ${this.age}
                        <br>DNI: ${this.dni}
                        <br>Email: ${this.email}
                        <br>Telephone: ${this.tel}
                        <br>Curso: ${this.curso}
                        <br>Comision: ${this.comision}
        `);
  }

  //definimos los getter y setters de las propiedades del objecto hijo

  get mostrarCurso() {
    return this.curso;
  }

  get mostrarComision() {
    return this.comision;
  }

  set modificarCurso(nuevoCurso) {
    this.curso = nuevoCurso;
  }
}

//crear o instanciar un alumno

let Juan = new Alumno(
  "Juan",
  "Cruz",
  18,
  32545452,
  "juancruz@gmail.com",
  "38145454545",
  "Fullstack",
  "23i",
  true
);

console.log(Juan);

Juan.showData();


//crear clase Mentor

class Mentor extends Person{
    constructor(nombre,
        apellido,
        edad,
        dni,
        email,
        tel,
        comision, 
        legajo,
        antiguedad){
            super(nombre, apellido, edad, email, dni, tel);
            this.comision = comision,
            this.legajo = legajo,
            this.antiguedad = antiguedad
        }
        
        showData() {
            document.write(`<h5>Person: ${this.name}</h5>
                                Name: ${this.name}
                                <br>Last Name: ${this.lastName}
                                <br>Age: ${this.age}
                                <br>DNI: ${this.dni}
                                <br>Email: ${this.email}
                                <br>Telephone: ${this.tel}
                                <br>Comision: ${this.comision}
                                <br>legajo: ${this.legajo}
                                <br> Antiguedad: ${this.antiguedad}
                `);
          }

       

        //getter y setters

}



let Abel = new Mentor('Abel', 'Cordoba', 36, 3145454, 'ab@gmail.com', 5454545454, '23i', 564854564654, 2)

console.log(Abel);

Abel.showData()

//Polimorfismo el mismo nombre del metodo con respuestas diferentes dependiendo del objeto
//por el cual se invoca

