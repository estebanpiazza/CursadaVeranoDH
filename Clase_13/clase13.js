//JSON - JavaScript Object Notation

// Un par de datos
// clave : valor
let profesor_imperativa1 = {
nombre:"Esteban",
apellido:"Piazza",
materiaACargo: "Programacion Imperativa",
documento:37276188,
obraSocial: "OSDE",
sueldo: 150000,
}
let profesor_imperativa2 = {
    nombre:"Leandro",
    apellido:"Borrelli",
    materiaACargo: "Programacion Imperativa",
    documento:42768750,
    obraSocial: "OSDE",
    }
profesores = [{profesor_imperativa1},{profesor_imperativa2}]
console.log(profesores)

console.log(profesor_imperativa1)
console.log(profesor_imperativa1.nombre)
console.log(profesor_imperativa1.apellido)
console.log("-------------------");
//variable 
let hobby = "Futbol"
//array 
let hobbies = ["Futbol","Baloncesto","Tenis"]
//Objeto
let deporteClub = {deporte:"futbol"}
//Array de objetos
let deportesBarrio = [{club1:"Futbol",direccion:"calle falsa 1"},{club2:"Baloncesto"},{club3:"Tenis",direccion:"calle cualquiera 3"}]

/* console.log(hobby);
console.log(hobbies);
console.log(deporteClub);
console.log(deportesBarrio); */
console.log("-------------------");

function consologear(array){
    for ( let i = 0;i < array.length;i++){
        console.log(array[i].direccion)
    }
}
consologear(hobbies)
consologear(deportesBarrio)





function Cliente(nombre, fecha, direccion) {
 //funcion constructora
    this.nombre = nombre;
    this.fechaNacimiento = fecha;
    this.direccion = direccion;
}

let clienteNuevo = new Cliente("Esteban","27/01/1993","Calle falsa 123")

let clienteNuevo2 = new Cliente("Mira Pia","22/09/1979","Calle falsa 321")
console.log(clienteNuevo)
console.log(clienteNuevo2)

// MINECRAFT EJEMPLO

//CLASE BLOQUE_DE_NATURALEZA
//BLOQUE_CERO={Gravedad:null}
//TIERRA ={Gravedad: NO}
//ARENA = {Gravedad:SI}

//Objeto Literal de Facebook:

/*
Nombre:
Apellido:
Mail:
Fecha de nacimiento:
Trabajo:
Estudios:
Estado Civil:
Telefono:
Lugares de residencia:
*/





