// Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.

const menor = () => {
    let menor = arreglo[0]

    for(let i=1; i<=arreglo.length;i++){
        if(arreglo[i] < menor){
            menor = arreglo[i]
        }
    }
    if(menor<0){
        console.log('El número menor es', menor, ' y su valor absoluto es: ');
        menor = Math.abs(menor)
    }else{
        console.log('El número menor es: ');
    }

    return menor
}

const arreglo = [2,3,4,1,2,-1,1,2,3,4]
console.log(menor(arreglo));