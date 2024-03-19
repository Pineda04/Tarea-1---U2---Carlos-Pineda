// Usando for, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.

let n

do{
    n = parseInt(prompt('Ingrese un número mayor a 0: '))
}while(n<1)

console.log(`Tabla de multiplicar del ${n}:`);

for(let i=1;i<=12;i++){
    console.log(`${n} x ${i} = ${n*i}`);
}