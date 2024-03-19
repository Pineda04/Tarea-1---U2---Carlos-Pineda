// Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero

const promedio = arreglo => {
    if(arreglo.length == 0){
        return 0
    }else{
        const promedio = (arreglo.reduce((a,b)=> a+b)) / arreglo.length
        return promedio.toFixed(2)
    }
}

const arregloPrueba = [1,2,3,6.7]

console.log('Arreglo que se le pasa a la función:', arregloPrueba);
console.log('El promedio del arreglo es: ', promedio(arregloPrueba));