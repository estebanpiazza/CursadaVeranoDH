// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const lectorEscritor = require("./jsonHelper (2)")
// A
let carrera = {
// B
bicicletas: lectorEscritor.leerJson("bicicletas"),
// C
bicicletasPorTanda : 4,
// D
ciclistasHabilitados: function(){
    return this.bicicletas.filter( bicicleta => !bicicleta.dopaje )
},
// E
buscarPorId: function(idABuscar){
    return this.bicicletas.find(bicicleta => bicicleta.id == idABuscar)
},
// F
filtrarPorPeso: function(pesoMaximo){
    let ciclistasHabilitadosInternos = this.ciclistasHabilitados()
    return ciclistasHabilitadosInternos.filter(ciclista => ciclista.peso <= pesoMaximo)
},
// G
ordenarPorRodado: function(){
   return this.bicicletas.sort((a,b)=> a.rodado - b.rodado)
                            // a = i y b = i+1
},
// H
largoPromedio: function(){
let resultado  = this.bicicletas.reduce( (acum,bicicleta) => acum + bicicleta.largo,0 )
return `El promedio de largos es ${parseInt(resultado / this.bicicletas.length)}`
},
// I
aumentarPeso: function(kilos,id){
    let ciclistaEncontrado = this.buscarPorId(id)
    ciclistaEncontrado.peso = ciclistaEncontrado.peso + kilos
    //ciclistaEncontrado.peso += kilos
    lectorEscritor.escribirJson("bicicletas",this.bicicletas)
    return "se modifico exitosamente"
},
// J
generarTanda:function(rodadoMaximo,pesoMinimo){
    let ciclistas = this.ciclistasHabilitados()
    let ciclistasFinales = []
    ciclistas.forEach( function(bici){
        if (bici.rodado<= rodadoMaximo && bici.peso>=pesoMinimo){
            ciclistasFinales.push(bici)
        }
    })
    return ciclistasFinales
},
// K
calcularPodio:function(array){
let ganadores = array.sort((a,b)=> b.puntaje - a.puntaje)
console.log(`El primer puesto es para ${ganadores[0].ciclista} con un puntaje de ${ganadores[0].puntaje}`)
console.log(`El segundo puesto es para ${ganadores[1].ciclista} con un puntaje de ${ganadores[1].puntaje}`)
console.log(`El tercer puesto es para ${ganadores[2].ciclista} con un puntaje de ${ganadores[2].puntaje}`)




}

}
/******************************/
/* Ejecución de las consignas */
/******************************/

console.log("---------- ↧ .D. ↧ ----------");
console.table(carrera.ciclistasHabilitados())
console.log("---------- ↥ ---------- ↥ ----------");

console.log("---------- ↧ .E.  ↧ ----------");
console.log(carrera.buscarPorId(1))
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .F. ↧ ----------");
console.table(carrera.filtrarPorPeso(9))
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .G. ↧ ----------");
console.table(carrera.ordenarPorRodado())
console.log("---------- ↥ ----------- ↥ ----------");

console.log("---------- ↧ .H.  ↧ ----------");
console.log(carrera.largoPromedio())
console.log("---------- ↥ --------- ↥ ----------");

console.log("---------- ↧ .I.  ↧ ----------");
console.log(carrera.aumentarPeso(1,1))
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .J.  ↧ ----------");
console.table(carrera.generarTanda(26,7))
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .K.  ↧ ----------");
carrera.calcularPodio(carrera.generarTanda(26,7))
console.log("---------- ↥ ------------- ↥ ----------");