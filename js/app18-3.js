// Usando for mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

let n

do{
    n = parseInt(prompt('Ingrese un número mayor a 1: '))
}while(n<=1)

console.log(`Lista de números del ${n} al 1: `);

for(let i=n; i>=1; i--){
    console.log(i);
}