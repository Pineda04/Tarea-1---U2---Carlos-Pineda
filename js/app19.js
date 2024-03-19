// Usando for, crear un programa que determine si un número es perfecto o no, (se dice
// que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).

const n = parseInt(prompt('Ingrese un número: '))

let sum = 0

console.log(`Números que son divisores del ${n}:`);
for(let i=1;i<n;i++){
    if(n%i==0){
        console.log(i);
        sum+=i
    }
}
console.log(`Suma de sus divisores: ${sum}`);
if(sum === n){
    console.log(`El número ${n} es un número perfecto`);
}else{
    console.log(`El número ${n} no es un número perfecto`);
}