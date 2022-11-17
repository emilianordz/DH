function tengoClases(dia) {
	switch (dia) {
    case "lunes":
      console.log("tenés clases")
    break

    case "miercoles":
       console.log("tenés clases")
      break

    case "viernes":
       console.log("tenés clases")
  break

    default:
      console.log("no tenés clases")
	}
  return dia
}
console.log(tengoClases("miercoles"))