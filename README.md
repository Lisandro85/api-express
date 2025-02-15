# API de Usuarios

Este es un proyecto de API REST para realizar operaciones CRUD de usuarios, desarrollado con Node.js, Express, MongoDB y Mongoose. La documentación de la API se genera con Swagger.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- Swagger para documentación

## Instalación

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Lisandro85/api-express
   cd tu-repo
   ```

2. Instalar dependencias:
   ```sh
   npm install
   ```

3. Configurar variables de entorno:
   Crear un archivo `.env` en la raíz del proyecto y agregar los siguientes valores:
   ```env
   DB_NAME=tu_nombre_bd
   DB_USERNAME=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_CLUSTER=tu_cluster
   ```
   **Nota:** No olvides de configurar tu URI de MongoDB correctamente en la carpeta config/dbCon.js.


## Uso

### Levantar el servidor
Para iniciar la API en modo desarrollo, ejecutar:
```sh
npm run dev
```

El servidor se ejecutará en `http://localhost:3000` por defecto.

### Documentación de la API
La documentación de la API generada con Swagger estará disponible en:
```sh
http://localhost:3000/api-docs
```

## Endpoints principales
| Método | Endpoint         | Descripción             |
|--------|----------------|-------------------------|
| GET    | /users         | Obtener todos los usuarios |
| GET    | /users/:id     | Obtener un usuario por ID |
| POST   | /users         | Crear un nuevo usuario |
| PUT    | /users/:id     | Actualizar un usuario |
| DELETE | /users/:id     | Eliminar un usuario |
