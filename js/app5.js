// Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
// las vocales.

let a = 0
let e = 0
let i = 0
let o = 0
let u = 0

const frase = prompt('Ingrese una frase: ')

for(let j=0; j<frase.length; j++){
    switch (frase[j].toLowerCase()) {
        case 'a':
            a++
            break;
        case 'e':
            e++
            break;
        case 'i':
            i++
            break;
        case 'o':
            o++
            break
        case 'u':
            u++
            break
    }
}

console.log(`Frase ingresada: ${frase}`);
console.log(`La vocal a, aparece ${a} veces`);
console.log(`La vocal e, aparece ${e} veces`);
console.log(`La vocal i, aparece ${i} veces`);
console.log(`La vocal o, aparece ${o} veces`);
console.log(`La vocal u, aparece ${u} veces`);