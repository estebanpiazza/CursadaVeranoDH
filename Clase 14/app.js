// Te proveemos la siguiente plantilla que tiene tres partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados, el cual parte de un obj. literal creado con una prop departamentos que contiene nuestra base de datos.
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados.
/***********************************/
/* ↧ Desarrollo de las consignas ↧ */
/***********************************/
const inmobiliaria = { //objeto
//array de objetos
  departamentos: [
    {
      id: 1,
      propietarios: "Luis Perez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 2395.8,
    },
    {
      id: 2,
      propietarios: "Luis Perez y María Martinez",
      cantidadHabitacion: 1,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 1765,
    },
    {
      id: 3,
      propietarios: "Laura García",
      cantidadHabitacion: 2,
      disponible: false,
      aceptaMascotas: false,
      cantidadPersonas: 4,
      precioAlquiler: 3993,
    },
    {
      id: 4,
      propietarios: "Julieta Tols",
      cantidadHabitacion: 1,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 1996.5,
    },
    {
      id: 5,
      propietarios: "Julieta Tols y Pablo Groming",
      cantidadHabitacion: 1,
      disponible: false,
      aceptaMascotas: false,
      cantidadPersonas: 1,
      precioAlquiler: 11979,
    },
    {
      id: 6,
      propietarios: "Pablo Groming",
      cantidadHabitacion: 2,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 3,
      precioAlquiler: 4658.5,
    },
    {
      id: 7,
      propietarios: "Luis Perez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 3,
      precioAlquiler: 3327.5,
    },
    {
      id: 8,
      propietarios: "Julieta Tols",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 9,
      propietarios: "Julieta Tols y Laura García",
      cantidadHabitacion: 3,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 10,
      propietarios: "Julieta Tols y Laura García",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 11,
      propietarios: "Luis Perez",
      cantidadHabitacion: 3,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 12,
      propietarios: "Juan Pablo Martinez",
      cantidadHabitacion: 3,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 4,
      precioAlquiler: 7986,
    },
    {
      id: 13,
      propietarios: "Juan Pablo Martinez",
      cantidadHabitacion: 2,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 4059.55,
    },
    {
      id: 14,
      propietarios: "Juan Pablo Martinez",
      cantidadHabitacion: 1,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 2,
      precioAlquiler: 3993,
    },
    {
      id: 15,
      propietarios: "Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 798.6,
    },
    {
      id: 16,
      propietarios: "Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: false,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 798.6,
    },
    {
      id: 17,
      propietarios: "Martín Gutierrez y José Torres",
      cantidadHabitacion: 0,
      disponible: true,
      aceptaMascotas: true,
      cantidadPersonas: 1,
      precioAlquiler: 665.5,
    },
  ],
//metodos del objeto, basados en el array de objetos.
departamentosDisponibles: function(){
  //departamentos disponibles ( o sea, en true)
  // if para encontrar si esta disponible
  // for para recorrer departamentos.
  let disponibles = [];
  //recorro todo el array
  for (let i = 0; i < this.departamentos.length; i++) {
    //filtro segun una propiedad
    if (this.departamentos[i].disponible == true ){
      disponibles.push(this.departamentos[i])
    }
    //devuelvo el nuevo array
  }
  return disponibles
},
buscarPorId: function (idABuscar){
  for (let i = 0; i < this.departamentos.length; i++) {
    if (this.departamentos[i].id == idABuscar ){
      return this.departamentos[i]
  }
}
},
buscarPorPrecio: function(precioMaximo){
  let precioAcorde = []
  let departamentosAptos = this.departamentosDisponibles()
  for (let i = 0; i < departamentosAptos.length; i++) {
    if(departamentosAptos[i].precioAlquiler <= precioMaximo){
      precioAcorde.push(departamentosAptos[i])
    }
}
return precioAcorde
},
alquilerPromedio: function (){
  let departamentosAptos = this.departamentosDisponibles()
  let sumatoria = 0
  for(let i = 0;i<departamentosAptos.length; i++){
    sumatoria = sumatoria + departamentosAptos[i].precioAlquiler
  }
  let promedio = sumatoria / departamentosAptos.length
  return `El precio promedio de los departamentos es de ${promedio}`
},




}

/***********************************/
/*   ↧ Ejecución de consignas ↧    */
/***********************************/
console.log("---------- ↧ Punto A ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.departamentosDisponibles());
console.log("---------------------------------");

console.log("---------- ↧ Punto B ↧ ----------");
// Ejecución aquí ↧
console.log(inmobiliaria.buscarPorId(2))

console.log("---------------------------------");

console.log("---------- ↧ Punto C ↧ ----------");
// Ejecución aquí ↧
console.table(inmobiliaria.buscarPorPrecio(5000))
console.log("---------------------------------");

console.log("---------- ↧ Punto D ↧ ----------");
// Ejecución aquí ↧
console.log(inmobiliaria.alquilerPromedio())

console.log("---------------------------------");

console.log("---------- ↧ Punto E ↧ ----------");
// Ejecución aquí ↧

console.log("---------------------------------");

console.log("---------- ↧ Punto F ↧ ----------");
// Ejecución aquí ↧

console.log("---------------------------------");

// Consignas Mesa de Trabajo:
console.log("---------- ↧ Punto A ↧ ----------");
// Ejecución aquí ↧

console.log("---------------------------------");

console.log("---------- ↧ Punto B ↧ ----------");
// Ejecución aquí ↧

console.log("---------------------------------");

console.log("---------- ↧ Punto C ↧ ----------");
// Ejecución aquí ↧

console.log("---------------------------------");

console.log("---------- ↧ Punto D ↧ ----------");
// Ejecución aquí ↧

console.log("---------------------------------");
