//! 1.- Importar express
const express = require('express');
const PORT = 3001;

const usuarios = [
  {
    id: 1,
    nombre: 'Pedro',
    apellido: 'Ramírez',
    edad: 19,
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'Perez',
    edad: 50,
  },
  {
    id: 3,
    nombre: 'César',
    apellido: 'Martinez',
    edad: 10,
  },
  {
    id: 4,
    nombre: 'Carla',
    apellido: 'Godinez',
    edad: 30,
  },
];

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



//! #################################
/* app.post('/login', (req, res) => { 
  const { email, password } = req.body;
  //! Hacer lo necesario para un login.
  res.json({
    mensaje: 'Has iniciado sesión correctamente',
    token: 'a89mafh70sd9hfm0a.nfasfjhiashfiashf98ashf.an9ndfasfasfaspofma'
  });
}); */

//! GET - Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json({
    message: usuarios,
  });
});

//! GET - Obtener un usuario por su ID



//! 5.- Iniciar Servidor
app.listen(PORT, () => {
  console.log('Servidor inicado correctamente en el puerto ' + PORT);
});



/*

axios.post('/api/', {nombre, apellido});
*/
