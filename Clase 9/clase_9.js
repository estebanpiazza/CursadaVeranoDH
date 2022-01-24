// Strings y Arrays
// string : cadena de caracteres
// Hola, a1b2c3d4, |@#~€¬, "123456" 

console.log("hola"+1) // no se suma / se concatena
console.log(1+1) // se suma

//excepcion con los otros simbolos matematicos excepto + 
console.log("1"+1)
console.log("1"-1)
console.log("1"*1)
console.log("2"/1)
let nombre = "Esteban Piazza"
console.log(nombre)
console.log(nombre[0])
console.log(nombre[7])

// generador de mail aumatico
// primer letra del nombre + apellido
function generarMail(nombre, apellido){
    //buscar en mails existentes
    let primerLetra = nombre[0].toLowerCase()
    return primerLetra + apellido + "@digitalhouse.com"
    //generar alternativa nombre+apellido
    //.toUpperCase()
}

console.log(generarMail("Esteban","piazza"))
let palabra = "HOLA"
console.log(palabra.toLowerCase())

// Arrays
// se maneja con un indice
// el inidice empieza en : 0 (cero)
                // 0        1       2
let apellidos = ["Piazza","Cejas","Borrelli","Gonzalez"]// hay 3 valores, ultimo indice: 2
console.log(apellidos[1])

console.log("Piazza".length)
console.log(apellidos.length)

function agregarArroba(array){
for (let i = 0; i < array.length; i++ ){ //mas performante
    console.log(array[i]+"@digitalhouse.com")}
}
agregarArroba(apellidos)

console.log("----------------------")

function agregarArrobaConWhile(array){
let indice = 0
    while (indice < array.length){ // menos performante
        console.log(array[indice]+"@digitalhouse.com")
        indice = indice + 1 // indice += 1
    }

}

agregarArrobaConWhile(apellidos)


// ctrl + c < detiene bucle

while(true){
    console.log("hola")
}

// matrices
// array[0][0]
//array[5][3]





