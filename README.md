# 🚀 API REST Blog con Node.js y Express

Bienvenido a la **API REST para un Blog** desarrollada con **Node.js**, **Express** y **MongoDB**. Esta API permite gestionar artículos de un blog, incluyendo la creación, lectura, actualización y eliminación de publicaciones.

## 📌 Características
- CRUD de artículos (Crear, Leer, Actualizar, Eliminar)
- Uso de **MongoDB** como base de datos
- Middleware para validación de datos con **Validator.js**
- Gestión de imágenes con **Multer**
- CORS habilitado para permitir peticiones desde el frontend

---

## 🛠️ Tecnologías y Dependencias
Este proyecto usa las siguientes tecnologías:

| Dependencia | Versión | Descripción |
|------------|---------|-------------|
| express    | Última  | Framework minimalista para Node.js |
| mongoose   | Última  | ODM para MongoDB |
| multer     | Última  | Middleware para la subida de archivos |
| validator  | Última  | Validación de datos |
| cors       | Última  | Middleware para habilitar CORS |
| nodemon    | Última  | Reinicio automático del servidor en desarrollo |

Para instalar todas las dependencias, ejecuta:
```sh
npm install
```

---

## 🚀 Instalación y Uso
### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/JsNox/RESTAPI_blog_express.git
cd RESTAPI_blog_express
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar la base de datos
Asegúrate de tener **MongoDB** instalado y corriendo en tu máquina. Si estás usando MongoDB Atlas, configura tu **cadena de conexión** en una variable de entorno o en el código.

### 4️⃣ Iniciar el servidor
Para entorno de desarrollo con **Nodemon**:
```sh
npm start
```
O manualmente con:
```sh
node index.js
```

Por defecto, la API corre en `http://localhost:3000`

---

## 📌 Rutas Disponibles

### 🔹 Obtener todos los artículos
```http
GET /api/articles
```

### 🔹 Obtener un artículo por ID
```http
GET /api/articles/:id
```

### 🔹 Crear un nuevo artículo
```http
POST /api/articles
```
**Body JSON:**
```json
{
  "titulo": "Mi primer artículo",
  "contenido": "Contenido del artículo"
}
```

### 🔹 Actualizar un artículo
```http
PUT /api/articles/:id
```
**Body JSON:**
```json
{
  "titulo": "Título actualizado",
  "contenido": "Contenido actualizado"
}
```

### 🔹 Eliminar un artículo
```http
DELETE /api/articles/:id
```

---

## 🚀 Contribuir
¡Las contribuciones son bienvenidas! Para contribuir:
1. Haz un **fork** del repositorio.
2. Crea una nueva **rama** (`git checkout -b mi-nueva-rama`).
3. Realiza tus cambios y haz un **commit** (`git commit -m 'Mi nueva funcionalidad'`).
4. Sube los cambios (`git push origin mi-nueva-rama`).
5. Abre un **Pull Request**.

---

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**. Puedes usarlo y modificarlo libremente. 🎉

---

Hecho con ❤️ por [JsNox](https://github.com/JsNox) 🚀

