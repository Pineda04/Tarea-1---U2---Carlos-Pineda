// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

const array = []

for(let i=0; i<20; i++){
    let random = Math.floor(Math.random()*100)
    array[i] = random
}

console.log('Números generados: ', array);