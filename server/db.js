import mongoose from "mongoose";

const dbUri ="mongodb+srv://victor:7HQEZ2vwxXDnPBYZ@app-db.ugor5ka.mongodb.net/App?retryWrites=true&w=majority";

// Crear una función asincrónica para conectar a la base de datos
export async function connectToDatabase() {
    try {
        await mongoose.connect(dbUri);

        console.log("Conexión a MongoDB Atlas establecida con éxito!");
    } catch (err) {
        console.error("Error de conexión a MongoDB Atlas:", err);
    }
}
