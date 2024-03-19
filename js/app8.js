// Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.

const n = parseInt(prompt('Ingrese un número: '))

if(n%5==0){
    console.log(`El número ${n} si es divisible por 5`);
}else{
    console.log(`El número ${n} no es divisible por 5`);
}