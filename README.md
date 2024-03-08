
> EduFly, una plataforma con el objetivo de consumir cursos digitales de acuerdo a los permisos de acceso que tenga, podría verse como la licencia que haya comprado.

> [!NOTE]
> Tener las versiones estables de Node y npm
> Versiones usadas:
> Node: v20.9.0
> npm: 8.6.0

> [!NOTE]
> npm install cuando se clona el repo para instalar las dependencias, npm run dev para levantar el proyecto, recordar primero tener el backend corriendo y la/s varible de entorno configurada

> [!IMPORTANT]
> Crear el .env y poner la/s siguientes variables de entorno:
> VITE_API_URL = http://localhost:4000/api

> [!IMPORTANT]
> Clonar, instalar y levantar primero el backend

> [!NOTE]
> Credenciales de usuarios  [ email: user1@gmail.com, password: 123 ]  [ email: user2@gmail.com, password: 123 ] las claves estan encriptadas en el backend

> [!WARNING]
> Asegurar que la conexion de wifi que tengan a la hora de levantar back y front no bloquee los puertos y hayan problemas

### Tecnologias
> React JS (Vite), Redux/toolkit, tailwind

### Estructura de Carpetas

- */public*: Archivos públicos (HTML, imágenes, etc.).
- */src*: Carpeta principal.
  - */api*: carpeta de endpoints.
      - */endpoints.js*: Archivo/s de endpoints a la API
  - */app*: Contenedores que conectan componentes con el estado de Redux.
    - */store.js*: store de redux pra manejar estado
  - */commponents*: Configuración de Redux (acciones, reducers, store).
    - */components.jsx*: Componentes de la aplicacion
  - */config*: configuraciones.
    - */configuraciones.js*: sE configuran archivos o variables importantes
  - */helpers*: Funciones y utilidades.
    - */helpers.js*: Funciones que se usan en la APP
  - */pages*: Paginas
    - */pages.jsx*: Paginas que componen la APP
  - */app.js*: configuracion de las rutas
  - */index.css*: plugins de tailwind.
  - */main.jsx*: Punto de entrada de la APP.
- */json*: DEpendencias
- */docs*: Documentación adicional.

