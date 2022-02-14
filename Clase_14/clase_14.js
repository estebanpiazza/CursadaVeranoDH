//Modulos
// Traer codigo de otro archivo
/*
Nativos: vienen instalados en el lenguaje 
Externos: descargados de internet
Creados: los mios propios
*/
/*
modulo creado: exports
modulo donde lo necesito: require
(en python es "import")
*/

const MATS = require("./mats")
console.log(MATS)
console.log(MATS.sumar(1,2))
console.log(MATS.restar(2,1))


