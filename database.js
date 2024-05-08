

// Crear una nueva colección "miColeccion"
db.createCollection("peliculas");

db.peliculas.insertMany(
    [
        {nombre: "culpa mia", genero: "Romance, Drama", duracion: 117, director: "Domingo Gonzáles", sinopsis: "La joven Noah deja todo para mudarse a la mansión de William Leister, el flamante y rico marido de su madre Rafaela. Allí conoce a Nick, su nuevo hermanastro. Ella no tarda en descubrir que, tras la imagen de hijo modelo, Nick oculta algo."},
    ]
)

db.ususarios.insertMany(
    [
        {nombre: "Roberto", correo: "usuario@ejemplo.com", contraseña: '123', pelicula_ids: []},
    ]
)