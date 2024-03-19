// Usando for mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt

let n

do{
    n = parseInt(prompt('Ingrese un número mayor a 1: '))
}while(n<=1)

console.log(`Lista de números del 1 al ${n}:`);

for(let i=1; i<=n; i++){
    console.log(i);
}