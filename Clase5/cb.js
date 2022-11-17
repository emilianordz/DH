let doble = numero1 => numero1 * 2
  let triple = numero1 => numero1 * 3
  let aplicarCallBack = (numero1, operacion) =>operacion(numero1)

console.log(aplicarCallBack(4,doble))
