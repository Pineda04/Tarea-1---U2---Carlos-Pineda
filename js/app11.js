// Determinar si una palabra empieza con mayúscula o no

const palabra = prompt('Ingrese una palabra: ')

if(!isNaN(palabra[0])){
    console.log(`La palabra "${palabra}" empieza con un número`);
}else if(palabra[0] === palabra[0].toUpperCase()){
    console.log(`La palabra "${palabra}" si empieza con mayúscula`);
}else{
    console.log(`La palabra "${palabra}" no empieza con mayúscula`);
}