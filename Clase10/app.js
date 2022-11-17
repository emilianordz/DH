let bicis = require ("./datosBici")

let dhBici ={
    bicicletas: bicis,
    buscarBici: function(idABuscar){
       let bicicletaADevolver = this.bicicletas.find (bicicleta =>{
         return bicicleta.id == idABuscar
       })
       if (bicicletaADevolver){
         return bicicletaADevolver
       }
       return null
    },
    venderBici: function(idABuscar){
      let biciBuscada = this.buscarBici(idABuscar)
      if (biciBuscada != null){
         biciBuscadavendida = true;
         return biciBuscada
      } else {
         return ("Bicicleta no encontrada")
      }
   },
   biciParaLaVenta: function (){
      let bicicletasSinVender = this.bicicletas.filter((bicicleta) =>{
         return bicicleta.vendida == false
      })
      return bicicletasSinVender
   },
   totalDeVentas: function(){
      let bicicletasVendidas = this.bicicletas.filter(function(bicicleta){
         return bicicleta.vendida == true
      })

      let ventaTotal = bicicletasVendidas.reduce(function(total, actual){
         return total + actual.precio
      }, 0)
      return ventaTotal
   },
}
console.log(dhBici.buscarBici(10))
console.log(dhBici.venderBici(2));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());