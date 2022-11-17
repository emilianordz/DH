let fruta = "Manzana"

let resultado = fruta == "Manzana"?"Buenisimo, me gustan las manzanas":"Queria manzana";
console.log(resultado);

let semaforo = "Azul"

switch(semaforo){
    case "Verde":
        console.log("puedo cruzar");
        break;
        case "Amarillo":
        console.log("Precaucion");
        break;
        case "Rojo":
        console.log("No cruces, hay que esperar");
        break;
        default:
            console.log("No funciona el semaforo");
            break

}