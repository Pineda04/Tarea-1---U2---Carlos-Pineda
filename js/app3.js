// 3-Escriba un programa que pida un número y diga si es divisible por 2

const n = parseFloat(prompt('Ingrese un número: '))

if(n%2==0){
    console.log(`El número ${n} es divisible por 2`);
}
else{
    console.log(`El número ${n} no es divisible por 2`);
}