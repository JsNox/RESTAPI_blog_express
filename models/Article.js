const { Schema, model} = require("mongoose")

const ArticuloSchema = Schema({
    titulo: {
        type: String,
        required: true

    },
    contenido: {
        type: String,
        required: true
    },
    fehca:{
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        default: "default.png"
    }
})

module.exports = model("Article", ArticuloSchema, "articles")

                    //nombre del modelo, nombre del objeto, coleccion de datos