const validator = require("validator")
const Article = require("../models/Article")

const prueba = (req,res) => {
    return res.status(200).json({
        mensaje: "Esta es una accion desde el controller"
    })
}

const alumnos = (req, res) => {
    return res.status(200).json([{
        alumno: 'Adriana Mata',
        grupo: '21A',
        matricula: 'cuh123'
    },
    {
        alumno: 'Cristian Mata',
        grupo: '21A',
        matricula: 'cuh321'

    }

    ])
}

// Rutas utiles
const crear = (req, res) => {

    //Recoger parametros en post 
    let parametros = req.body;

    //validar los parametros recogidos
    try{
        let validar_titulo = !validator.isEmpty(parametros.titulo) &&
                            validator.isLength(parametros.titulo, {min:5, max:undefined});
        let valitar_contenido = !validator.isEmpty(parametros.contenido);

        if(!validar_titulo || !valitar_contenido){
            throw new Error("No se ha validado el formulario")
        }

    }catch{
        return res.status(400).json({
            status: "error",
            mensaje: "Formulario no valido, faltan datos"
            
        })
    }

    //Crear un objeto a guardar 

    //Asignar valores a objeto basado en el modelo (manual o automatico)

    //Guardar el articulo del blog en la base de datos 

    //Devolver resultados
    return res.status(200).json({
        mensaje: "Accion crear desde controller",
        parametros
    })
}


module.exports = {
    prueba,
    alumnos,
    crear
}


// const controlador = {
//     propiedad: () => {

//     }
// }

// module.exports = controlador;

// const nombre_metodo = () => {

// }

// function nombre_metodo2 () {
//     ...nombre_metodo
// }