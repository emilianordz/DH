let perfil = " "

switch (perfil) {
  case "asistente":
    console.log("Usted solo tiene permisos de registrar, modificar y consultar datos")
    break

  case "Usuario":
    console.log("Usted solo tiene permisos de consultar datos")
    break

  case "administrador":
    console.log("Usted tiene todos los privilegios de uso de sistema")
    break

    default:
        console.log("Debe especificar un perfil valido")
}
