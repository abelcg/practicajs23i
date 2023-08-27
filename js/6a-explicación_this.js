/* 
keyword this: hace referencia al objeto actual. Sirve para obtener todo lo que tiene dicho objeto

si defino el método deposito: ()=>{
    console.log(this)
}

veremos que this hace referencia al objeto global windows por lo cuál no se recomiendo usar arrow fuctions
para definir métodos

si lo definimos como deposito(){
    this  hará referencia al objeto cuenta, es decir una autoreferenciación
}

 deposito(){
        this.saldo = this.saldo + 100
    },
    retiro(){
        return this.saldo = this.saldo - 50
    }


    invoco
cuenta.deposito()
console.log(cuenta.saldo)
cuenta.retiro()
console.log(cuenta.saldo)
como los métodos son funciones admiten parámetros. Incluimos el parámetro cantidad
*/

const cuenta = {
    nroCuenta: '54452121215415',
    saldo: 100,
    deposito(cantidad){
        this.saldo = this.saldo + cantidad
    },
    retiro(cantidad){
        return this.saldo = this.saldo - cantidad
    }
}

cuenta.deposito(150)
cuenta.deposito(50)
cuenta.deposito(110)
console.log(cuenta.saldo)
cuenta.retiro(10)
cuenta.retiro(150)
cuenta.retiro(150)
console.log(cuenta.saldo);
