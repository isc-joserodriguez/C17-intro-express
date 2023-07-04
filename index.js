//! 1.- Importar express
const express = require('express');
const PORT = 3001;

const usuarios = [];

//! 2.- Instanciar aplicación de express.
const app = express();

//! 3.- XXXXXXXXXX

//! 4.- Configurar las rutas safsdfs
//* Endponts
//! GET, POST, PUT, DELETE

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Hola Mundo!',
  });
});

app.get('/hola/:nombre/:apellido', (request, response) => {
  const { nombre, apellido } = request.params;
  //! La creación de un usuario
  //! Buscar un usuario por nombre y apellido y regresar la info
  //! Actualizar la info de un usuario

  response.json({
    mensaje: `Hola ${nombre} ${apellido}!`,
  });
});

app.get('/hola/:nombre/:apellido/:edad', (request, response) => {
  const { nombre, apellido, edad } = request.params;

  usuarios.push({ nombre, apellido, edad });

  response.json({
    usuarios,
  });
});

//! GET - Obtener elementos /usuarios || /usuarios/:id
//! PUT - Actualizar elementos /usuarios/:id
//! DELETE - Eliminar elementos /usuarios/:id
//*
//! POST - Crear elementos /usuarios
app.post('/usuarios', (req, res) => {
  const { name, lastname, age } = req.query;
  usuarios.push({ name, lastname, age });
  res.json({
    message: 'Se agregó correctamente al usuario',
  });
});

//! GET - Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json({
    message: usuarios,
  });
});

//! 5.- Iniciar Servidor
app.listen(PORT, () => {
  console.log('Servidor inicado correctamente en el puerto ' + PORT);
});
