// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

let angulos
let suma = 0

for(let i=1;i<=3;i++){
    angulos = parseFloat(prompt(`Ingrese la medida en grados del ángulo ${i}: `))
    suma += angulos
}

if(suma===180){
    console.log(`La suma total de los ángulos internos es de ${suma} grados, por lo tanto es un triángulo válido`);
}else{
    console.log(`La suma total de los ángulos internos es de ${suma} grados, por lo tanto no es un triángulo válido`);
}