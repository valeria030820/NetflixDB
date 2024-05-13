// Crear una nueva colección "miColeccion"
db.createCollection("peliculas");

db.peliculas.insertMany(
    [
        {
            nombre: "Ocean's 8: las estafadoras",
            genero: "Crimen/Comedia", duracion: 111,
            director: "Gary Ross",
            sinopsis: "Debbie Ocean, la hermana de Danny, pretende cometer el atraco del siglo durante la gala Met que se celebra en Nueva York: quiere robar un collar valorado en más de 150 millones de dólares. Debbie embarca en la misión a siete ladronas expertas."
        },
        {
            nombre: "La isla de la fantasía",
            genero: "Terror/Fantasía",
            duracion: 109,
            director: "Jeff Wadlow",
            sinopsis: "El enigmático señor Roarke hace realidad los sueños secretos de los invitados que recibe en su paraíso tropical, pero pronto se convierten en una pesadilla de la que quizá no salgan con vida."
        },
        {
            nombre: "El hombre gris",
            genero: "Acción/Suspenso",
            duracion: 122,
            director: "Anthony y Joe Russo",
            sinopsis: "El principal activo de la CIA, cuya identidad nadie conoce, descubre secretos de la agencia. La confesión lo pone en el punto de mira de sicarios de todo el planeta, cuyo antiguo colega les ha ordenado que lo asesinen."
        },
        {
            nombre: "Sweet Girl",
            genero: "Acción/Suspenso",
            duracion: 110,
            director: "Brian Andrew Mendoza",
            sinopsis: "Un hombre jura llevar ante la Justicia a los responsables de la muerte de su mujer, a la vez que protege a la única familia que le queda, su hija."
        },
        {
            nombre: "Baby: el aprendiz del crimen",
            genero: "Acción/Suspenso",
            duracion: 115,
            director: "Edgar Wright",
            sinopsis: "Baby es un chofer especializado en fugas que, enamorado, pretende dejar la vida criminal y empezar de cero con la mujer que ama. Cuando el jefe de una banda de gánsters le obliga a trabajar para él y la operación fracasa, su vida y la de su chica pasan a estar en peligro."
        },
    ]
)

db.usuarios.insertMany(
    [
        {nombre: "Roberto", correo: "usuario@ejemplo.com", contraseña: '123', pelicula_ids: []},
    ]
)