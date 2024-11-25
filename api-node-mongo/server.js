// Importando los módulos necesarios
const express = require('express');
const mongoose = require('mongoose'); // Importando mongoose para la conexión a MongoDB
const bodyParser = require('body-parser'); // Middleware para manejar los datos JSON
const routes = require('./app/controllers/routes'); // Ruta de controladores para manejar las solicitudes

// Crear la aplicación Express
const app = express();

// Configuración del puerto
const port = 3000;

// Middleware para manejar las solicitudes JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB usando Mongoose
mongoose.connect('mongodb://localhost:27017/api-db', {
  useNewUrlParser: true,    // Opción de compatibilidad (aunque ahora es innecesaria)
  useUnifiedTopology: true  // Opción de compatibilidad (aunque ahora es innecesaria)
})
.then(() => {
  console.log('Conectado a MongoDB');
})
.catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
});

// Ruta raíz (opcional) - para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Node.js y MongoDB');
});

// Usar las rutas definidas en el archivo routes.js
app.use('/api', routes); // Aquí puedes manejar las rutas específicas de la API

// Iniciar el servidor y escuchar en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
