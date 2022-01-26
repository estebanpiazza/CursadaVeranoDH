// Ciclos FOR 
// ciclo For basico de repetición
for(let i = 0;i < 5;i++){
    console.log(i)
}
console.log("hola")

// Se pueden usar para "iterar" sobre strings o Arrays
console.log("------------------");
let nombre = "Esteban"
for (let index = 0; index < 7; index++) {
    console.log(nombre[index])   
}

console.log("------------------");
let nombre2 = "Santiago"
for (let index = 0; index < nombre2.length; index++) {
    console.log(nombre2[index])   
}
console.log("------------------");
//                  0 1 2 3
let arrayNumeros = [1,2,3,4]
for (let index = 0; index < arrayNumeros.length; index++ ) {
    console.log(arrayNumeros[index]) 
}
for (let index = 1; index < arrayNumeros.length; index++ ) {
    console.log(arrayNumeros[index]) 
}
for (let index = 0; index < arrayNumeros.length; index=index+2 ) {
    console.log(arrayNumeros[index]) 
}

console.log("------------------");
let arrayPrecios = [100,2000,30000,400000]
let arrayPreciosConIva = []
let iva = 1.21

for (let index = 0; index < arrayPrecios.length; index++) {
    arrayPreciosConIva.push(arrayPrecios[index]*iva)  
}
console.log(arrayPrecios)
console.log(arrayPreciosConIva)

console.log("------------------");

/*
Le pida al usuario un string (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
*/
/*
entrada: una cadena de caracteres
proceso: imprimir en consola hasta que diga "salir"
salida: la impresion o Hasta Pronto
*/

function despedir(string){
    if(string == "salir"){
        return "Hasta pronto!" //el return corta la ejecución
    }else{
        console.log(string)
    }
}

/*
var string = prompt('Ingresa un texto');

while(string !== 'salir') {
  console.log(string);
  string = prompt('Ingresa un texto');
}

console.log('Hasta pronto!') */

/*
Escribe un programa que imprima los números pares del 0 al 100:
*/

function contarConIf(){
    for(let numerosPares = 0;numerosPares < 101 ;numerosPares++ ){
        if(numerosPares%2==0){
            console.log(numerosPares)
        }
    }
}

contarConIf()

 function contarSinIf(){
    for(let numerosPares = 0;numerosPares < 101 ;numerosPares= numerosPares + 2 ){
        console.log(numerosPares)
    }
}
contarSinIf() 

console.log("------------------");
let x = 0
while(x < 100){
    if(x%2==0){
        console.log("w "+x)
    }
    x = x + 1
}


let x2 = 101
while(x2 < 100){
    if(x2%2==0){
        console.log("w2 "+x2)
    }
    x2 = x2 + 1
}


let result = '';
let i = 6;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while