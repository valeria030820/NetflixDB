const DatabaseManager = require('./DatabaseManager');

async function main() {
    const db = new DatabaseManager('mongodb://localhost:27017', 'cine');
    await db.connect();
  
    // Insertar un documento
    //await db.insert('mi_coleccion', { nombre: 'Juan', edad: 30 });
  
    // Obtener documentos
    const docs = await db.find('peliculas');
    console.log('Documentos:', docs);
  
    await db.close();
}
  
main();


/*const DatabaseManager = require('./DatabaseManager');
const PeliculasManager = require('./PeliculasManager');
const UsuariosManager = require('./UsuariosManager');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const connectionString = 'mongodb://localhost:27017'; 
const databaseName = 'NetflixDB';

const dbManager = new DatabaseManager(connectionString, databaseName);

function mostrarMenu() {
    console.log('\nBienvenido al sistema de gestión de películas de Netflix:');
    console.log('1. Ver todas las películas');
    console.log('2. Ver todos los usuarios');
    console.log('3. Agregar nueva película');
    console.log('4. Agregar nuevo usuario');
    console.log('5. Salir');

    rl.question('Por favor, seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                mostrarTodasPeliculas().then(mostrarMenu).catch(console.error);
                break;
            case '2':
                mostrarTodosUsuarios().then(mostrarMenu).catch(console.error);
                break;
            case '3':
                agregarNuevaPelicula();
                break;
            case '4':
                agregarNuevoUsuario();
                break;
            case '5':
                console.log('Saliendo del programa...');
                rl.close();
                break;
            default:
                console.log('Opción inválida');
                mostrarMenu();
                break;
        }
    });
}

function mostrarTodasPeliculas() {
    return peliculasManager.obtenerTodasPeliculas()
        .then(peliculas => {
            console.log('Películas:', peliculas);
        });
}

function mostrarTodosUsuarios() {
    return usuariosManager.obtenerTodosUsuarios()
        .then(usuarios => {
            console.log('Usuarios:', usuarios);
        });
}

function agregarNuevaPelicula() {
    // Simulamos el proceso de agregación
    console.log('Agregando una nueva película...');
    mostrarMenu();
}

function agregarNuevoUsuario() {
    // Simulamos el proceso de agregación
    console.log('Agregando un nuevo usuario...');
    mostrarMenu();
}

console.log('Inicializando el sistema...');

dbManager.connect()
    .then(() => {
        const peliculasCollection = dbManager.getCollection('Peliculas');
        const usuariosCollection = dbManager.getCollection('Usuarios');

        peliculasManager = new PeliculasManager(peliculasCollection);
        usuariosManager = new UsuariosManager(usuariosCollection);

        mostrarMenu();
    })
    .catch((error) => {
        console.error('Error al conectar con la base de datos:', error);
        rl.close();
    });

*/

