# TaskApp

TaskApp es una aplicación web sencilla para iniciar sesión y gestionar una lista de tareas. Está construida con Node.js y Express, y sirve una interfaz estática desde `public/`. 

## Funcionalidades

- Inicio de sesión con correo y contraseña.
- Creación y consulta de tareas.
- API REST protegida por una comprobación de sesión básica.

## Requisitos

- Node.js y npm.

## Iniciar la aplicación

Instala las dependencias y ejecuta el servidor:

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. 

## Uso

Introduce cualquier correo y contraseña no vacíos para iniciar sesión. Después podrás crear tareas y verlas en el listado.

Las tareas y el estado de sesión se guardan únicamente en memoria: se reinician al detener el servidor. 

## API

- `POST /login`: inicia sesión con un JSON que contiene `email` y `password`.
- `GET /tasks`: devuelve la lista de tareas después de iniciar sesión.
- `POST /tasks`: añade una tarea usando un JSON con `title`, después de iniciar sesión.
