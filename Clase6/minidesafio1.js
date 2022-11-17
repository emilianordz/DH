let electrodomesticos = ["Heladera", "Batidora", "Televisor","Licuadora", "Computadora"]
let primerElectrodomestico= electrodomesticos.shift("Heladera")
let agprimElectrodomestico= electrodomesticos.push("Heladera")
let productoBuscado= electrodomesticos.indexOf("Televisor")
////////////////////////////////////////////////////////////////////////
if (productoBuscado != -1){
    console.log("Producto encontrado")
}
else{
console.log("El producto no ha existe")
}
////////////////////////////////////////////////////////////////////////
let electronuevos= electrodomesticos.push("Ventilador", "Calefactor")
let electrjunto= electrodomesticos.join(" ")
let reemplazo= electrjunto.replace ("Batidora", "Secadora") 
let todojunto= reemplazo.split (" ")
////////////////////////////////////////////////////////////////////////
console.log(electrodomesticos[3])
console.log(electrodomesticos[4])
console.log(electrodomesticos[0])
console.log (electrodomesticos.length)
console.log(electrodomesticos.join(" "))
console.log(electronuevos)
console.log(electrjunto.length)
console.log(reemplazo)
console.log(todojunto)
