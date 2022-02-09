/*
arrow functions : tienen diferencias en el manejo del scope/entorno
callback : una función que llama a otra función 
*/

function sumar (a,b){
    return a + b
}


function saludarYCumplirAños(nombre,edadActual,callback){
    let edad = callback(edadActual,1)
    return `Hola ${nombre}, felices ${edad} años`
}

console.log(saludarYCumplirAños("Esteban",28,sumar))



console.log("*********************************")
let horaActual = () =>{
let fechaActual = new Date()
return fechaActual.getHours() + ":" + fechaActual.getMinutes()

}
console.log(horaActual())

