//funcion: porción de codigo que se puede invocar cuando sea necesaria

function sumar (a,b){ // declaracion
    return a + b}

sumar (1,2) // invocación
// programación funcional
console.log(sumar(1,2))


//Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola:

function calcularEdad(anioNacimiento,anioActual){
    return anioActual - anioNacimiento
}
console.log(calcularEdad(1993,2022))

/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728". */

function IMC(peso,altura){
    return peso / (altura*altura)
    // return peso / Math.pow(altura,2)
}
console.log(IMC(80,1.75))

/*Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10".*/

function decidir(numero){
    if (numero > 10){
        return "El número es mayor a 10"
    }else{
        return "El numero es menor o igual a 10"
    }
}
// prueba de campo , todos los casos posibles 
console.log(decidir(9))
console.log(decidir(10))
console.log(decidir(11))

/* Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!" */

// numero aleatorio
// if ; si coincide, es correcto ; si no, es incorrecto

function juegoAdivinar(numeroAleatorio,numeroUsuario){
    if (numeroAleatorio===numeroUsuario){
        return "Coincide"
    }else{
        return "No coincide"
    }

}

let numAlet = parseInt(Math.random()*10)

console.log(juegoAdivinar(numAlet,5))

//-----------//

//Operadores
// https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

// mismo dato, distinto tipo
console.log( "10" == 10) //compara solo el valor
console.log( "10" === 10) // compara el valor Y el tipo
//negado
console.log( "10" != 10)
console.log( "10" !== 10) 

function edad (numero){
    if (typeof(numero)=="number"){
        if (numero > 18){
            return "gracias por ingresar tu edad";}
            else {
                return "debe ser mayor de edad";
            }
        
    }else{
        return "debes ingresar un numero";
    }
}
console.log(edad(10))
console.log(edad("Esteban"))
console.log(typeof(10))





















