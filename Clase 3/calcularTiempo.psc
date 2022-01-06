Algoritmo obtenerTiempo
	//Hacer un programa que ingrese por teclado un número total de segundos y que luego pueda mostrar la cantidad de horas, minutos y segundos que existen en el valor ingresado
    Escribir "Ingrese Cantidad en Segundos : "
    Leer segundoss
    horas = TRUNC(segundoss/3600)
    minutos = TRUNC((segundoss - (horas*3600))/60)
    seg = TRUNC(segundoss - ((horas * 3600)+ (minutos*60)))
    Escribir ""
    Escribir "Horas    : ", horas
    Escribir "Minutos  : ", minutos
    Escribir "Segundos : ", seg
	 
FinAlgoritmo
