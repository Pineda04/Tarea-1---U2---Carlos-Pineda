// Crear un programa que determine si un número introducido en un Prompt es par o
// no, la respuesta será mostrada en la consola

const n = parseInt(prompt('Ingrese un número: '))

if(n%2==0){
    console.log(`El número ${n} es un número par`);
}else{
    console.log(`El número ${n} no es un número par`);
}