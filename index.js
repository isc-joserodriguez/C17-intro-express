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

//! GET - Obtener todos los usuarios & Como filtro (Query string)
app.get('/users', (req, res) => {
  const { id, nombre, apellido, edad } = req.query;
  const filter = {
    id,
    nombre,
    apellido,
    edad,
  };
  console.log(filter);
  if (id || nombre || apellido || edad) {
    res.json({
      message: usuarios.filter((usuario) => {
        let encontrado = true;
        if (id) {
          if (usuario.id === Number(id)) {
            encontrado = encontrado && true;
          } else {
            encontrado = false;
          }
        }

        if (nombre) {
          if (usuario.nombre === nombre) {
            encontrado = encontrado && true;
          } else {
            encontrado = false;
          }
        }

        if (apellido) {
          if (usuario.apellido === apellido) {
            encontrado = encontrado && true;
          } else {
            encontrado = false;
          }
        }

        if (edad) {
          if (usuario.edad === Number(edad)) {
            encontrado = encontrado && true;
          } else {
            encontrado = false;
          }
        }
        return encontrado;
      }),
    });
  } else {
    res.json({
      message: usuarios,
    });
  }
});

//! GET - Obtener un usuario por su ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  //! Buscar el id dentro del array de usuarios.
});

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
  //Logica necesaria para hacer X cosa.
  res.json({
    mensaje: 'Has iniciado sesión correctamente',
    token: 'a89mafh70sd9hfm0a.nfasfjhiashfiashf98ashf.an9ndfasfasfaspofma'
  });
}); */

//! 5.- Iniciar Servidor
app.listen(PORT, () => {
  console.log('Servidor inicado correctamente en el puerto ' + PORT);
});

/*

axios.post('/api/', {nombre, apellido});
*/

/*
! Entidad - autos
Create
POST - /autos
Read
GET - /autos/:id

GET - /autos?modelo=v3&marca=tesla&año=2020
GET - /autos
Update
PUT - /autos/:id
Delete
DELETE - /autos/:id

! Entidad - alumnos
Create
POST - /alumnos
Read
GET - /alumnos/:id
GET - /alumnos?modelo=v3&marca=tesla&año=2020
GET - /alumnos
Update
PUT - /alumnos/:id
Delete
DELETE - /alumnos/:id
*/
