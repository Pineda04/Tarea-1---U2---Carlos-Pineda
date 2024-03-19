// Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

let n
let i = 1

do{
    n = parseInt(prompt('Ingrese un número mayor a 1: '));
}while(n<=1)

while(i<=n){
    console.log(i);
    i+=2
}