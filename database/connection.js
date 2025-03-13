const mongoose = require("mongoose")

//Script para realizar la conexion con mongo

const conexion = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mi_blog")
        console.log("conectado a la base de datos mi blog")
    } catch (error) {
        console.log("Error al conectar a la base de datos...")
        
    }

}

module.exports = {
    conexion
}
