// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares, pista: utilizar reduce().

const pares = arreglo => {
    console.log(`Números pares:`);
    return arreglo.reduce((arreglo2, n)=>{
        if(n%2==0){
            arreglo2.push(n)
        }
        return arreglo2
    },[])
}

let numeros = []
let x

do{
    x = prompt('Cantidad de números que desea ingresar en el arreglo (mínimo 2): ')
}while(x<2)

for(let i=x; i>=1;i--){
    const n = parseInt(prompt(`Ingrese un número (${i} restantes): `))
    numeros.push(n)
} 

console.log('Arreglo que se le paso a la función:', numeros);
console.log(pares(numeros));