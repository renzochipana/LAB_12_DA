// Importando paquetes y archivos necesarios para crear y levantar servidor que se conecta a bd y trabaja con rutas
var express = require('express');
var app = express();
var db = require('./models/db');
var Router = require('./controllers/routes');
var port = 3000;
app.use('/api', Router);
app.listen(port);
console.log("Ejecutandose en el puerto 3000");
