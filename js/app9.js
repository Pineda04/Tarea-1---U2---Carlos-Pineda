// Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.

const string = prompt('Ingrese un string: ')

if(isNaN(string[0])){
    console.log(`El string "${string}" comienza con una letra`);
}else{
    console.log(`El string "${string}" comienza con un número`);
}