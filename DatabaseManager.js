const { MongoClient } = require('mongodb');

class DatabaseManager {

    constructor(uri, databaseName) {
        this.uri = uri;
        this.databaseName = databaseName;
        this.client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

    async connect() {
        try {
            await this.client.connect();
            this.db = this.client.db(this.databaseName);
            console.log('Conexión a MongoDB establecida.');
        } catch (error) {
            console.error('Error al conectar a MongoDB:', error);
            throw error;
        }
    }

    async insert(collectionName, data) {
        try {
            const collection = this.db.collection(collectionName);
            const result = await collection.insertOne(data);
            //console.log('Documento insertado:', result.ops[0]);
        } catch (error) {
            console.error('Error al insertar datos:', error);
        }
    }

    async find(collectionName, query = {}) {
        try {
            const collection = this.db.collection(collectionName);
            const result = await collection.find(query).toArray();
            //console.log('Documentos obtenidos:', result);
            return result;
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }

    close() {
        return new Promise((resolve, reject) => {
            this.client.close((error) => {
                if (error) {
                    console.error("Error disconnecting from MongoDB:", error);
                    reject(error);
                } else {
                    console.log("Disconnected from MongoDB");
                    resolve();
                }
            });
        });
    }
}

module.exports = DatabaseManager;
