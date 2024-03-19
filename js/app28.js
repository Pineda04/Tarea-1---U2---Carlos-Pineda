// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

const soloVocal = arreglo => {
    const vocales = ['a', 'e', 'i', 'o', 'u']
    
    arregloNuevo = []
    for(let palabra of arreglo){
        if(vocales.includes(palabra.toLowerCase()[0])){
            arregloNuevo.push(palabra)
        }
    }

    return arregloNuevo
}

let x 
do{
    x = prompt('Cantidad de palabras que desea ingresar en el arreglo (mínimo 3): ')
}while(x<3)

let palabras = []
for(let i=x; i>=1; i--){
    const n = prompt(`Ingrese una palabra (${i} restantes): ` )
    palabras.push(n)
}

console.log('Se pasaron las siguientes palabras al arreglo:', palabras);
if(soloVocal(palabras).length > 0){
    console.log('Unicamente estas palabras inician con una vocal:', soloVocal(palabras));
}else{
    console.log('No se encontraron palabras que inicien con una vocal en el arreglo aterior');
}
