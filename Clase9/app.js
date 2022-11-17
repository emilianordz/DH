const movies = require("./peliculas");
const peliculas = require ("./peliculas");

for (let index = 0 ; index < peliculas.length; index ++){
    const movie = peliculas[index]
  const message = movie.id + '. Genero: ' + movie.genre + ', rating: ' + movie.rating + ', premios: ' + movie.awards + ', duracion: ' + movie.length + 'min, precio: u$' + movie.price;
    console.log(message);
}
/////////OPTIMIZA EL MESSAGE CON ` ${MOVIE.GENRE} ${MOVIE.ID}´

