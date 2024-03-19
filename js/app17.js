// Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.

let n
let m

do{
    n = parseInt(prompt('Ingrese un numero no menor que 1: '))
}while(n<1)

do{
    m = parseInt(prompt(`Ingrese un numero no menor o igual que ${n}: `))
}while(m<=n)

let i = n
let sum = 0

console.log(`Números pares entre ${n} y ${m}:`);
while(i<=m){
    if(i%2==0){
        sum += i
        console.log(i);
    }
    i++
}

console.log(`La suma total de los números anteriores es: ${sum}`);