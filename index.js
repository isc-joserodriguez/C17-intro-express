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
    edad: 19,
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

//! 3.- Agregar "funciones especiales"
app.use(express.json());

//! 4.- Configurar las rutas
//* Endponts
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Hola Mundo!',
  });
});

//! GET - Obtener todos los usuarios & Como filtro (Query string)
app.get('/users', (req, res) => {
  const { id, nombre, apellido, edad } = req.query;

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
      //Mongoose ODM
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
  res.json({
    message: usuarios.filter((usuario) => usuario.id === Number(id))[0],
  });
});

//! POST
app.post('/users', (req, res) => {
  const { id, nombre, apellido, edad } = req.body;
  if (!id || !nombre || !apellido || !edad) {
    res.json({
      mensaje: 'Datos incompletos',
    });
  }
  usuarios.push({ id, nombre, apellido, edad });
  res.json({
    mensaje: 'Usuario guardados',
    user: { id, nombre, apellido, edad },
    usuarios,
  });
});

//! PUT - Actualizar elementos /usuarios/:id
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = usuarios.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    return res.json({
      mensaje: 'No existe el ususario con id: ' + id,
    });
  }

  const { nombre, apellido, edad } = req.body;

  if (!nombre || !apellido || !edad) {
    return res.json({
      mensaje: 'No hay nada para modificar',
    });
  }

  usuarios[index] = {
    id: usuarios[index].id,
    nombre: nombre || usuarios[index].nombre,
    edad: edad || usuarios[index].edad,
    apellido: apellido || usuarios[index].apellido,
  };

  res.json({
    mensaje: 'Se actualizó el usuario correctamente',
    newUser: usuarios[index],
  });
});
//! DELETE - Eliminar elementos /usuarios/:id
app.delete('/users', (req, res) => {});

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