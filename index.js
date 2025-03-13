// importacion de modulos
const express = require("express")
const cors = require("cors")
const { conexion } = require("./database/connection")

console.log("Aplicacion node arrancada")

//Conectar a la base de datos
conexion();

// Crear servidor de express
const app = express();
const puerto = 3900;

//configurar cors
app.use(cors());

// convertir el body de mis peticiones http en json 
app.use(express.json());

//Rutas controller y routes
const rutas_article =require("./routes/articleRoutes")
app.use(express.urlencoded({extended:true}));


//direccionar las rutas
app.use("/api", rutas_article)


//declarar rutas
app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el enpoint de prueba")
    // return res.status(200).send(`
    //     <div>
    //         <h1>
    //             Probando ruta nodejs, enpoint de prueba
    //         </h1>
    //     </div>
        
    //     `
    // )

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
})


// mantener mi servidor escuchando las peticiones
app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto", puerto)
});