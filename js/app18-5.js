// Usar for, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.

let n
let m
let sum = 0

do{
    n = parseInt(prompt('Ingrese un numero no menor que 1: '))
}while(n<1)

do{
    m = parseInt(prompt(`Ingrese un numero no menor o igual que ${n}: `))
}while(m<=n)

console.log(`Números pares entre ${n} y ${m}:`);
for(let i=n;i<=m;i++){
    if(i%2==0){
        console.log(i);
        sum+=i
    }
}

console.log(`La suma total de los números anteriores es: ${sum}`);