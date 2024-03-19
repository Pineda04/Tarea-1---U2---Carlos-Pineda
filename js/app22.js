// . Dado el array = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio

const array = [1,2,3,4,5,6]

// a)
console.log('Inciso a) Usando while');
let i = 0
while(i<array.length){
    console.log(array[i]);
    i++
}

// b)
console.log('Inciso b) Usando for');
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

// c
console.log('Inciso c) Usando forEach');
array.forEach(numeros => console.log(numeros))

// d
console.log('Inciso d) Sumando 1 a cada elemento');
array.forEach(n => console.log(n+1))

// e
console.log('Inciso e) Generar copia de un array pero incrementando 1 a cada elemento');
const arrayCopia = array.map(n => n+1)
console.log(arrayCopia);

// f
console.log('Inciso f) Calcular promedio');
const promedio1 = (array.reduce((a,b) => a +b))/array.length
const promedio2 = (arrayCopia.reduce((a,b) => a +b))/array.length
console.log(`Promedio del array original: ${promedio1}`);
console.log(`Promedio del array modificado (inciso e): ${promedio2}`);