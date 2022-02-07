// Te proveemos la siguiente plantilla que tiene tres partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados, el cual parte de un obj. literal creado con una prop libros que contiene nuestra base de datos.
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados.
/***********************************/
/* ↧ Desarrollo de las consignas ↧ */
/***********************************/
const helper = require("./clase_14.js")
const hospital = {
    pacientes : [
        {
          id: 1,
          Paciente: "Vickie Godehard",
          Medicamento: "Dock/Sorrel Mixture",
          Genero: "Mujer",
          Doctor: "Shina Dooman",
          FechaIngreso: "2/12/2021"
        },
        {
          id: 2,
          Paciente: "Alfredo Whitemarsh",
          Medicamento: "Paricalcitol",
          Genero: "Hombre",
          Doctor: "Margaret Arnli",
          FechaIngreso: "12/14/2021"
        },
        {
          id: 3,
          Paciente: "Cristal Lukesch",
          Medicamento: "VINCA MINOR",
          Genero: "Mujer",
          Doctor: "Zia Silly",
          FechaIngreso: "4/24/2021"
        },
        {
          id: 4,
          Paciente: "Maria Stainfield",
          Medicamento: "TRICLOSAN",
          Genero: "Mujer",
          Doctor: "Blair Ambroix",
          FechaIngreso: "4/7/2021"
        },
        {
          id: 5,
          Paciente: "Amandy Hearst",
          Medicamento: "Mineral Oil",
          Genero: "Mujer",
          Doctor: "Ewart Calvie",
          FechaIngreso: "4/16/2021"
        },
        {
          id: 6,
          Paciente: "Mari Spawforth",
          Medicamento: "HYDROXYZINE PAMOATE",
          Genero: "Hombre",
          Doctor: "Shina Dooman",
          FechaIngreso: "10/17/2021"
        },
        {
          id: 7,
          Paciente: "Emmalynne Ever",
          Medicamento: "Norethindrone and Ethinyl Estradiol",
          Genero: "Mujer",
          Doctor: "Selia Springthorp",
          FechaIngreso: "3/19/2021"
        },
        {
          id: 8,
          Paciente: "Rollin Kleinzweig",
          Medicamento: "Buspirone hydrochloride",
          Genero: "Hombre",
          Doctor: "Maurene Beevors",
          FechaIngreso: "3/14/2021"
        },
        {
          id: 9,
          Paciente: "Vernen Petigrew",
          Medicamento: "TITANIUM DIOXIDE",
          Genero: "Mujer",
          Doctor: "Shina Dooman",
          FechaIngreso: "7/3/2021"
        },
        {
          id: 10,
          Paciente: "Duane Label",
          Medicamento: "Perphenazine",
          Genero: "Mujer",
          Doctor: "Shaina Hise",
          FechaIngreso: "7/30/2021"
        },
        {
          id: 11,
          Paciente: "Philis Heavens",
          Medicamento: "Alteplase",
          Genero: "Mujer",
          Doctor: "Shina Dooman",
          FechaIngreso: "10/26/2021"
        },
        {
          id: 12,
          Paciente: "Christel Sprague",
          Medicamento: "ergocalciferol",
          Genero: "Mujer",
          Doctor: "Tomas Raatz",
          FechaIngreso: "6/22/2021"
        },
        {
          id: 13,
          Paciente: "Valerye Sansome",
          Medicamento: "alprazolam",
          Genero: "Mujer",
          Doctor: "Dalston Vickress",
          FechaIngreso: "12/14/2021"
        },
        {
          id: 14,
          Paciente: "Windy Luetkemeyers",
          Medicamento: "Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate",
          Genero: "Mujer",
          Doctor: "Stephen Melladew",
          FechaIngreso: "5/7/2021"
        },
        {
          id: 15,
          Paciente: "Maxie Lergan",
          Medicamento: "Phentermine Hydrochloride",
          Genero: "Mujer",
          Doctor: "Shina Dooman",
          FechaIngreso: "1/9/2022"
        },
      ],
 buscarPorNombre:function(nombre){
   for(let i = 0; i < this.pacientes.length;i++){
     if (nombre == this.pacientes[i].Paciente){
       return this.pacientes[i];
     }
   }
 },
modificarMedicamento: function(paciente,medicamentoNuevo){
let pacienteBuscado = this.buscarPorNombre(paciente)
pacienteBuscado.Medicamento = medicamentoNuevo
return pacienteBuscado
},
cadaGenero : function(){
  let mujeres = 0
  let hombres = 0
  for(let i = 0;i<this.pacientes.length;i++){
    if(this.pacientes[i].Genero === "Mujer"){
      mujeres = mujeres + 1 //metodo noob
    }else{
      hombres += 1 //metodo pro
    }
  }
  return `La cantidad de hombre es ${hombres} y mujeres ${mujeres}`
},
}
/***********************************/
/*   ↧ Ejecución de consignas ↧    */
/***********************************/
console.log(hospital.buscarPorNombre("Maxie Lergan"))
console.log(hospital.modificarMedicamento("Maxie Lergan","ibuprofeno"))

console.log(hospital.pacientes)
console.log(hospital.cadaGenero())
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

console.log("---------- ↧ Punto E ↧ ----------");
// Ejecución aquí ↧

console.log("---------------------------------");