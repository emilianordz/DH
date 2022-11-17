let hotToys = require ("./datos/figuras1");
let bandai = require ("./datos/figuras2");
let starWars = require ("./datos/figuras3");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let objlit ={
    figuras: unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach
        }
    }
}

console.log(objlit.figuras)