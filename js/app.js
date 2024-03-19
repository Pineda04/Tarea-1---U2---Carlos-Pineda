// 1- Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.

const n1 = parseInt(prompt('Ingrese el primer número: '))
const n2 = parseInt(prompt('Ingrese el segundo número: '))

if(n1>n2){
    console.log(`El número mayor es ${n1}`);
}else{
    console.log(`El número mayor es ${n2}`);
}