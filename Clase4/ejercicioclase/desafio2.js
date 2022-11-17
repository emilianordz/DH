let pagoMes = 12000;
let consumoKWH = 450;
let porcentajeAumento = 20;
let nuevaTarifa = (pagoMes*porcentajeAumento) / 100;

if (consumoKWH <= 300) {
console.log ("El costo de su consumo es de" + " " + "$" + pagoMes)
}
else if (consumoKWH >300) {
    (nuevaTarifa)
    console.log("Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de " +
     "$" + (pagoMes + nuevaTarifa))

}
