// Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.

const entero = (n) => {
    if(isNaN(n)){
        console.log(`Error, ${n} ni siquiera es de tipo númerico, es de tipo ${typeof(n)}`);
    }else{
        if(Number.isInteger(parseFloat(n))){
            console.log(`${n} es de tipo entero`);
        }else{
            console.log(`Error, ${n} es de tipo flotante`);
        }
    }
}

const n = prompt('Ingrese un número entero: ')

entero(n)