let nombre = "Emiliano"
let apellido = "Rodriguez"
let sueldoActual = 90000
let porcentajeAumento = 25

let calculoAumento = sueldoActual * porcentajeAumento / 100
let nuevoSueldo = calculoAumento + sueldoActual

console.log("Hola estimado"+" "+nombre+ " "+apellido);
console.log("En base a su sueldo actual:");
console.log("$"+sueldoActual);
console.log("Ha recibido un aumento del 25%:");
console.log("$"+calculoAumento);
console.log("Su nuevo sueldo es de:"+" "+"$"+ nuevoSueldo);