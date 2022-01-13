// entrada: una palabra
//proceso : convertirla a mayuscula
// salida: la palabra en mayuscula

function convertirAMayuscula(palabraAConvertir){
    return palabraAConvertir.toUpperCase()    
}

console.log(convertirAMayuscula("esteban"))
console.log(convertirAMayuscula("hola"))


/******************************/
//entrada: autor y el titulo
// proceso: unir autor y titulo a frase
// salida: una frase que incluye autor y titulo

let autorOriginal = "Mario Benedetti" //variable
let tituloOriginal = "Antologia poetica!"

function libro (autor,titulo){//parametros
    //return " ¡el escritor uruguayo " + autor + " es el escritor de " + titulo ; 
    return `¡el escritor uruguayo ${autor} es el escritor de ${titulo} ` // backtick (expresion literal, Template_literals) https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    }

console.log (libro(autorOriginal,tituloOriginal))
function sumar (a,b){return a + b}
console.log(`La suma de 1 + 1 es ${sumar(2,3)}`)

/********************/

 function devolucionDeCircunferencia(radioDeUnCirculo) {
    return radioDeUnCirculo*2;
};
console.log(devolucionDeCircunferencia(10))
console.log(typeof(devolucionDeCircunferencia(10))); 
// entrada: un dato
// proceso: averiguar el tipo de dato
// salida: el tipo de dato

function tipoDeDato (dato){
    return typeof(dato)
}
console.log(tipoDeDato("esteban"))
console.log(tipoDeDato(28))
console.log(tipoDeDato(true))

/******************/

/*Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40 horas.*/
/* entrada: sueldo 
proceso: dividir sueldo por cantidad de horas
salida: valor de la hora*/

function calcularHoraDeTrabajo(sueldo,horasDiarias){
    return sueldo / 4 / 5 / horasDiarias

}
console.log(calcularHoraDeTrabajo(90000,9))


/****** */
function convertirMonedaArgACol(pesoA,dolarA){
let pesosC = (pesoA/dolarA) * 3950
return pesosC}
console.log(convertirMonedaArgACol(100,206.5))

function convertirMonedaColAArg(pesoC,dolarC){
let pesosA = (pesoC/dolarC) * 206.5
return pesosA}
console.log(convertirMonedaColAArg(1000000,3950))

/**************** */
const prompt = require("prompt-sync")({ sigint: true });

let xdolares = prompt("Ingrese la cantidad > ");
let opcion = prompt("Ingrese 1 para pesos Arg, y 2 para pesos Col")
let xpesoCOP = xdolares * 3978.96;
let xpesoArg = xdolares * 103.66;

function cambio() {
    if ( opcion == "1"){
        return xpesoCOP ;}
    else if(opcion == "2"){

  }
}

console.log(cambio(xdolares));
