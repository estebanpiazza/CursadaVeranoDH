let electronicos = [
    { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
    { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
    { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
    { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
    { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
  ];

  let tiendaElectronica = {
    electronicosInternos : electronicos,
    //tiendaElectronica.electronicosInternos los valores del array de objetos anterior
    calcularGananciaTotal : function (){
        // multiplicar cantidad por precio de cada producto y lo sumo
        let resultado = this.electronicosInternos.reduce( (acum,producto) => acum + producto.precioEnUsd * producto.cantVendidos,0)
        return resultado
        /*
            for (let producto = 0;producto < this.electronicosInternos.length;producto++){
                acum = electronicosInternos[producto].preioEnUsd * electronicosInternos[producto].cantVendidos
            } return acum


        */
    },
    filtrarPorCantidad : function(minimo){
        let arrayResultante = this.electronicosInternos.filter( producto => producto.cantVendidos >= minimo )
        return arrayResultante
    },
    aumentarPrecio : function (porcentajeAumento){
        let aumento = porcentajeAumento / 100 + 1;
        // 20/100 = 0.2 +1 = 1.2 (x*1.2 = 20%+)
        this.electronicosInternos.map( producto => (producto.precioEnUsd = producto.precioEnUsd * aumento))
        return this.electronicosInternos
        /* for(let i = 0 ; i < this.electronicosInternos.length;i++){
            this.electronicosInternos[i].precioEnUsd =  this.electronicosInternos[i].precioEnUsd * aumento
        } return this.electronicosInternos
        */
    },
    mostrarBonito : function(){
    this.electronicosInternos.forEach( (producto) => console.log(`El producto ${producto.nombre}, cuesta ${producto.precioEnUsd} y se vendieron ${producto.cantVendidos} dando una ganancia total de ${producto.cantVendidos * producto.precioEnUsd}`)  )

    /*
        for (let i = 0;i<this.productosInternos.length;i++){
            console.log(`El producto ${productosInternos[i].nombre}, cuesta ${productosInternos[i].precioEnUsd} y se vendieron ${productosInternos[i].cantVendidos} dando una ganancia total de ${productosInternos[i].cantVendidos * productosInternos[i].precioEnUsd}`)
        }

    */

    }

    
  }


  console.log(tiendaElectronica.calcularGananciaTotal())
  console.table(tiendaElectronica.filtrarPorCantidad(18))
  console.log(tiendaElectronica.aumentarPrecio(20))
  tiendaElectronica.mostrarBonito()




/*   arr.reduce( callback (acumulador, valorActual[, índice[, array]] )  [, valorInicial]) */
            //              acum        producto                        , 0