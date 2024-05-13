const DatabaseManager = require('./DatabaseManager');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

async function mostrarPeliculas(db) {
    const peliculas = await db.find('peliculas', {});
    console.log('Peliculas:', peliculas);
}

async function añadirFavoritos(db, user) {
    const pelicula = await question('Ingresa el nombre de la pelicula ');
    peli = await db.find('peliculas', {nombre: pelicula})
    if(peli.length > 0) {
        const favorite = peli[0];
        const pelicula_ids = user.pelicula_ids;
        pelicula_ids.push(favorite._id);
        db.update('usuarios', {nombre: user.nombre}, {pelicula_ids: pelicula_ids})
        console.log('Película añadida a favoritos');
    } else {
        console.log('Pelicula no encontrada');
    }
}

async function mostrarFavoritos(db, user) {
    const peliculas = await db.find('peliculas', {_id: {$in: user.pelicula_ids}});
    console.log('Peliculas favoritas:', peliculas);
}

async function agregarPelicula(db) {
    const nombre = await question('Ingresa el nombre de la pelicula: ');
    const genero = await question('Ingresa el genero de la pelicula: ');
    var duracion = await question('Ingresa la duracion de la pelicula: ');
    duracion = parseInt(duracion);
    const director = await question('Ingresa el director de la pelicula: ');
    const sinopsis = await question('Ingresa la sinopsis de la pelicula: ');
    const data = {nombre, genero, duracion, director, sinopsis};
    await db.insert('peliculas', data);
    console.log('Pelicula añadida');
}

async function mostrarMenu(db, user) {
    let opcion = '';
    while(true) {
        console.log(`\nBienvenido al sistema de gestión de películas de Netflix: ${user.nombre}`);
        console.log('1. Ver todas las películas');
        console.log('2. Añadir película a favoritos');
        console.log('3. Ver mis películas favoritas');
        console.log('4. Agregar nueva película');
        console.log('5. Salir');

        opcion = await question('Por favor, seleccione una opción: ');

        switch (opcion) {
            case '1':
                await mostrarPeliculas(db);
                break;
            case '2':
                await añadirFavoritos(db, user);
                break
            case '3':
                await mostrarFavoritos(db, user);
                break;
            case '4':
                await agregarPelicula(db);
                break;
            case '5':
                console.log('Saliendo del programa...');
                process.exit();
                break;
            default:
                console.log('Opción inválida');
                break;
        }

        await question('Pulse una enter para continuar');
    }
}


async function main() {

    //Conexión a la db
    const db = new DatabaseManager('mongodb://localhost:27017', 'NETFLIXDB');
    await db.connect();

    //usuario
    var user;

    //Mientras esté vacío el usuario hace un inicio de sesión
    while(!user){
        //Pide al usuario los datos
        const usuario = await question('Ingrese su correo: ');
        const u = await db.find('usuarios', {correo: usuario});
        //Si existe el correo
        if(u.length > 0) {
            //Pide la contraseña
            const pass = await question('Ingrese su contraseña: ');
            const uc = await db.find('usuarios', {correo: usuario, contraseña: pass});
            if(uc.length > 0) {
                user = u[0];
            }
            else{
                console.log('Contraseña incorrecta');
            }
        }
        else{
            console.log('Usuario no encontrado');
        }
    }

    await mostrarMenu(db, user);

    await db.close();
}

main();

