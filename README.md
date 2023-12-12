# Prueba Técnica Toolbox
¡Bienvenido a la prueba técnica de Toolbox! Aquí encontrarás las instrucciones para poner en marcha tanto el frontend como el backend de la aplicación.

# Backend
 ## Accede a la carpeta backend_toolbox.


```cd backend_toolbox```

## Instala las dependencias utilizando el siguiente comando:


``` npm install```
o

``` npm i```
Después de la instalación de las dependencias, ejecuta el siguiente comando para iniciar el servidor:

bash
Copy code
npm run start
El servidor estará disponible en http://localhost:3000.

La API proporciona las siguientes rutas:

GET /files/list: Obtiene la lista de archivos.
GET /getfiles: Obtiene todos los productos detallados.
GET /files/data?fileName=<nombre del archivo>: Recibe un parámetro fileName para obtener datos específicos del archivo.
Para ejecutar los tests, utiliza el siguiente comando:

bash
Copy code
npm test
# Frontend
Accede a la carpeta frontend_toolbox.

bash
Copy code
`cd frontend_toolbox`
Instala las dependencias utilizando el siguiente comando:

bash
Copy code
npm install
o

bash
Copy code
npm i
Después de la instalación de las dependencias, inicia el servidor frontend con el siguiente comando:

bash
Copy code
npm start
El frontend estará disponible en http://localhost:3001.

¡Listo! Ahora deberías tener tanto el backend como el frontend funcionando correctamente. ¡Buena suerte con la prueba técnica!