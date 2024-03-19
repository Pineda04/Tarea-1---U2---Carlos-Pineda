// Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.

let n
let i = 1

do{
    n = parseInt(prompt('Ingrese un número mayor a 0: '))
}while(n<1)

console.log(`Tabla de multiplicar del ${n}:`);

while(i<=12){
    console.log(`${n} x ${i} = ${n*i}`);
    i++
}