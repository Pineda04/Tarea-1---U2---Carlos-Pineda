// Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

let n
let i = 1

do{
    n = parseInt(prompt('Ingrese un numero mayor a 1: '))
}while(n<=1)

console.log(`Lista de números del 1 al ${n}:`);

while(i<=n){
    console.log(i);
    i++
}