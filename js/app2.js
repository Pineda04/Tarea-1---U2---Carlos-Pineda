// Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres

const n1 = parseInt(prompt('Ingrese el primer número: '))
const n2 = parseInt(prompt('Ingrese el segundo número: '))
const n3 = parseInt(prompt('Ingrese el tercer número: '))

if(n1>n2 && n1>n3){
    console.log(`El número mayor es ${n1}`);
}else if(n1<n2 && n2>n3){
    console.log(`El número mayor es ${n2}`);
}else if(n3>n1 && n3>n2){
    console.log(`El número mayor es ${n3}`);
}