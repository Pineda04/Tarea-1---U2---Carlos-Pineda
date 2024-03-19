// Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
// arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].

//Forma #1

const invertir = arreglo => {
    const nuevoArreglo = arreglo.reverse()
    return nuevoArreglo
}

const arreglo = [1,2,3,4,5]

console.log('Forma #1');
console.log('Arreglo original: ', arreglo);
console.log('Arreglo invertido: ', invertir(arreglo));

// Aqui lo hice también de otra forma, porque en la primera forma la función reverse que da Js hacia
// practicamente todo el trabajo, asi que decidi hacerlo también sin usar esa función y 
// crear yo mismo una función que hiciera lo de darle reverso a el arreglo

// Forma #2

const invertir2 = arreglo2 => {
    const nuevoArreglo2 = []

    for(let i=arreglo2.length-1; i>=0; i--){
        nuevoArreglo2.push(arreglo2[i])
    }

    return nuevoArreglo2
}

const arreglo2 = [1,2,3,4,5]

console.log('\nForma #2');
console.log('Arreglo original: ', arreglo2);
console.log('Arreglo invertido: ', invertir2(arreglo2));