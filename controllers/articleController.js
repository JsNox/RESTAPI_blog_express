const validator = require("validator");
const Article = require("../models/Article");

const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Esta es una acción desde el controller"
    });
};

const alumnos = (req, res) => {
    return res.status(200).json([
        {
            alumno: "Adriana Mata",
            grupo: "21A",
            matricula: "cuh123"
        },
        {
            alumno: "Cristian Mata",
            grupo: "21A",
            matricula: "cuh321"
        }
    ]);
};

// Crear un nuevo artículo
const crear = async (req, res) => {
    try {
        // Recoger parámetros del cuerpo de la petición
        let parametros = req.body;

        // Validar los parámetros recogidos
        if (
            !parametros.titulo ||
            validator.isEmpty(parametros.titulo) ||
            !validator.isLength(parametros.titulo, { min: 5 })
        ) {
            throw new Error("El título es inválido o demasiado corto.");
        }

        if (!parametros.contenido || validator.isEmpty(parametros.contenido)) {
            throw new Error("El contenido no puede estar vacío.");
        }

        // Crear un nuevo objeto basado en el modelo
        const articulo = new Article(parametros);

        // Guardar en la base de datos usando async/await
        const articuloGuardado = await articulo.save();

        return res.status(200).json({
            status: "success",
            mensaje: "Artículo guardado correctamente en la base de datos.",
            articulo: articuloGuardado
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "Error al procesar la solicitud."
        });
    }
};


const listar = async (req, res) => {
    try {
        let articulos = await Article.find({})
            .sort({ createdAt: -1 })  // Ordenar por fecha de creación descendente (más recientes primero)
            .limit(3)                 // Limitar la consulta a 3 artículos
            .exec();

        if (!articulos || articulos.length === 0) {
            return res.status(404).json({
                status: "error",
                mensaje: "No se han encontrado artículos"
            });
        }

        return res.status(200).json({
            status: "success",
            articulos
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Error en la consulta de artículos",
            error: error.message
        });
    }
};

const articleUniqe = async (req, res) => {
    try {
        // Obtener el ID desde los parámetros de la URL
        let articuloId = req.params.id;

        // Verificar que el ID no esté vacío
        if (!articuloId) {
            return res.status(400).json({
                status: "error",
                mensaje: "Falta el ID del artículo en la petición."
            });
        }

        // Buscar el artículo por ID en la base de datos
        let articulo = await Article.findById(articuloId).exec();

        // Si no se encuentra el artículo
        if (!articulo) {
            return res.status(404).json({
                status: "error",
                mensaje: "No se ha encontrado el artículo."
            });
        }

        // Responder con el artículo encontrado
        return res.status(200).json({
            status: "success",
            articulo
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Error al buscar el artículo.",
            error: error.message
        });
    }
};

const actualizar = async (req, res) => {
    try {
        let articuloId = req.params.id;
        let parametros = req.body;

        if(!parametros.titulo || validator.isEmpty(parametros.titulo) ||
         !validator.isLength(parametros.titulo, {min: 5})){
            return res.status(400).json({
                status: error,
                mensaje: "El titulo es invalido o muy corto"
            })

        }
        if(!parametros.contenido || validator.isEmpty(parametros.contenido)){
            return res.status(400).json({
                status: error,
                mensaje: "El contenido no puede enviarse vacío"
            })
        }
        let articuloActualizado = await Article.findByIdAndUpdate(
            articuloId,
            parametros,
            {new: true} //El articulo actualizado
        )

        if(!articuloActualizado){
            return res.status(404).json({
                status: error,
                mensaje: "No se pudo actualizar, Id no Existe"
            })
        }
        return res.status(200).json({
            status: "succes",
            mensaje: "Articulo actualizado correctamente",
            articulo: articuloActualizado
        })

    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Error al actualizar el registro.",
            error: error.message
        });

    }
}
// Crear el metodo borrar,
// buscan id, validan que existe, si existe se borra.

const borrar = async (req, res) => {
    try {
        let articuloId = req.params.id;

        // Buscar y eliminar el artículo
        let articuloEliminado = await Article.findByIdAndDelete(articuloId);

        if (!articuloEliminado) {
            return res.status(404).json({
                status: "error",
                mensaje: "No se encontró el artículo para eliminar."
            });
        }

        return res.status(200).json({
            status: "success",
            mensaje: "Artículo eliminado correctamente.",
            articulo: articuloEliminado
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            mensaje: "Error al eliminar el artículo.",
            error: error.message
        });
    }
};

// Exportar controladores
module.exports = {
    prueba,
    alumnos,
    crear,
    listar,
    articleUniqe,
    actualizar,
    borrar

};
