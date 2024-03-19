// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o
// no.

const array = ['azul', 'amarillo', 'rojo', 'verde', 'café', 'rosa']

const color = prompt('Ingrese un color: ')

if(array.includes(color)){
    console.log(`El color ${color} si se encuentra en el arreglo`);
}else{
    console.log(`El color ${color} no se encuentra en el arreglo`);
}