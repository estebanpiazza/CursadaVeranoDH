Array.prototype.mostrarPosicionesPares = function(){
    let arrayNuevo = []
    for(let i = 0;i<this.length;i++){
        if(i%2==0){
        arrayNuevo.push(this[i])}
    }
return arrayNuevo
}

numeros = [1,2,3,4,5,6]

console.log( numeros.mostrarPosicionesPares() )
// array.find(valor)

console.log("*****************************************")

/* Supongamos que tienes en un array todos los alumnos inscriptos a una materia.
let alumnos = ["Vidal","Borrelli","Montes","Cejas","Brugna","Gonzalez"].

Como buenos profesores, lo primero que vamos a hacer es ordenar alfabéticamente el array, creá una función que te permita ordenar cualquier array.

Administración te pide información del alumno Piazza, pero no recordas haberlo visto en el array, creá una función que permita cerciorarse de que el alumno se encuentra entre los inscriptos, es decir, que si se encuentra, lo devuelva.

El estudiante Cejas va a dejar el curso debido a incompatibilidades, debemos encontrarlo en el array y eliminarlo del mismo, creá una función que cumpla dicha tarea.

Por último, debido a la gran cantidad de estudiantes, se decide crear una segunda camada, debes crear dos nuevos arrays, la primera mitad del curso y la segunda mitad. */

let alumnos = ["Vidal","Borrelli","Montes","Cejas","Brugna","Gonzalez"]
function consologear(callback){
    console.log(callback)}

function ordenar (array){
    return array.sort()
}

consologear(ordenar(alumnos))

/* let lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
function Burbuja(array) {
    
    let n, i, k, aux;
    n = array.length;
      for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (array[i] > array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
return array}

    console.log(Burbuja(lista)); // Mostramos, por consola, la lista ya ordenada */


function encontrar(estudiante,array){
return array.find( apellido => apellido === estudiante )

}

consologear(encontrar("Piazza",alumnos))
consologear(encontrar("Vidal",alumnos))

function eliminar(array,apellido){
    let indice = array.indexOf(apellido)
    array.splice(indice,1)
    return array

}
consologear(eliminar(alumnos,"Cejas"))

/* indexOf propio
for (let i = 0; i < array.length;i++){
    if(valorABuscar == array[i]){
        return i
    }
}
*/ // IndexOf Propio
Array.prototype.encontrarIndice = function(valorAbuscar){
    for (let i = 0;i < this.length;i++){
        if (this[i] == valorAbuscar){
            return i
        }}}
console.log(alumnos.encontrarIndice("Vidal"))

function cortarALaMitad(array){
    let primeraMitad,segundaMitad
    primeraMitad = array.slice(0,array.length/2)
    segundaMitad = array.slice(array.length/2)
    return {primeraMitad,segundaMitad}
}

consologear(cortarALaMitad(alumnos))


