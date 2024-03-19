// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt

const array = []

const generar = () => {
    let n

    do{
        n = prompt('Cantidad de números al azar que desea generar: ')
    }while(n<1)

    for(let i=0; i<n; i++){
        let random = Math.floor(Math.random()*100)
        array.push(random)
    }

    console.log('Números generados', array);
}

generar()