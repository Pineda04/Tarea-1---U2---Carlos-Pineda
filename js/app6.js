// Escribir un programa que escriba en pantalla los divisores de un número dado.

const n = parseInt(prompt('Ingrese un número: '))

console.log(`Los divisores del número ${n} son: `);

for(let i=1;i<=n;i++){
    if(n%i==0){
        console.log(i);
    }
}