// Condicionales
//Son "estructuras de control de flujo"

// if - switch
/*
entrada: 3 notas
proceso: sumarlas y dividirlas por la cantidad, y comparar con 10.5
salida: aprobado o desaprobado

*/
function calcularPromedio(nota1,nota2,nota3){ //creamos la función
    let promedio = (nota1+nota2+nota3)/3; //calculamos el promedio
    if ( promedio > 10.5){ //consultamos si el promedio es mayor a 10.5
        return "Aprobado"; //mensaje de aprobación si se cumple
    }else{
        return "Desaprobado";//mensaje de desaprobación si no se cumple
    }
}

function mostrarPorConsola(valor){
    console.log(valor)
}


mostrarPorConsola(calcularPromedio(11,11,11))
mostrarPorConsola(calcularPromedio(9,9,9))
mostrarPorConsola(calcularPromedio(10.5,10.5,10.5))
mostrarPorConsola("Holi")


//Ingresar un número y mostrar si es número par o impar
/*
entrada: numero
proceso: dividir por 2 y ver el resto, comprarlo para saber si es par o impar
salida: par o impar
*/

function calcularParEImpar(numero){
let resultado = numero % 2
console.log(resultado)
if(resultado == 0 ){ // o resultado != 0 o resultado == 1 o resultado != 1 
    return `El numero ${numero} es par`
}else if (resultado == 1){
    return `El numero ${numero} es impar`

}else{
    return `"${numero}" < no es un numero, por favor revisa el ingreso de datos. ` //template literal
    //return numero + "no es un numero, por favor revisa el ingreso de datos"
}
}

mostrarPorConsola(calcularParEImpar(10))
mostrarPorConsola(calcularParEImpar(11))
mostrarPorConsola(calcularParEImpar("esteban"))


//Elaborar un código donde se ingrese por teclado un número natural de hasta 2 cifras, si tiene una cifra muestre lo mínimo que le falta para ser un número de 2 cifras; de lo contrario muestre lo mínimo que le falta para ser un número de 3 cifras. Considerar que el usuario ingresa números de hasta dos cifras.

/*
entrada: numero
proceso: determinar la cantidad de cifras segun si tiene 1 o 2
salida: cuantas cifras tiene
*/

function calcularCifras(numero){
    if(numero < 10 && numero >= 0){
        let falta = 10 - numero
        return `A ${numero} le falta/n ${falta} para ser de dos cifras`
    }else if (numero >= 10 && numero < 1000){
        let falta = 1000 - numero
        return `A ${numero} le falta/n ${falta} para ser de tres cifras`
    } else{ //user friendly error
        return "El valor no esta dentro de los valores solicitados"
    }

}

mostrarPorConsola(calcularCifras(-10))
mostrarPorConsola(calcularCifras(5))
mostrarPorConsola(calcularCifras(3))
mostrarPorConsola(calcularCifras(10))
mostrarPorConsola(calcularCifras(100))
mostrarPorConsola(calcularCifras(500))
mostrarPorConsola(calcularCifras(998))
mostrarPorConsola(calcularCifras("esteban"))
mostrarPorConsola(calcularCifras(1000))
mostrarPorConsola(calcularCifras(-10))

