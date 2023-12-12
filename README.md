# Prueba Técnica Toolbox
¡Bienvenido a la prueba técnica de Toolbox! Aquí encontrarás las instrucciones para poner en marcha tanto el frontend como el backend de la aplicación.

# Backend
 ## Accede a la carpeta backend_toolbox.


```cd backend_toolbox```

## Instala las dependencias utilizando el siguiente comando:


```npm install```
```npm i```
## Iniciar el servidor:


```npm run start```
### El servidor estará disponible en http://localhost:/8000/toolbox/api/

## La API proporciona las siguientes rutas:

Obtener la lista de archivos. con el metodo GET:
```/files/list ```

Obtener todos los productos detallados. con el metodo GET:
```/getfiles```

Obtener un archivo especifico, este requiere un parámetro fileName para obtener datos específicos del archivo. con el metodo GET:
```/files/data?fileName=<nombre del archivo>``` 

## Para ejecutar los tests, utiliza el siguiente comando:


```npm test```

# Frontend
Accede a la carpeta frontend_toolbox.

```cd frontend_toolbox```

## Instala las dependencias utilizando el siguiente comando:


```npm install```
```npm i```

## Después de la instalación de las dependencias, inicia el servidor frontend con el siguiente comando:

```npm start```

## El frontend estará disponible en http://localhost:3000.

¡Listo! Ahora deberías tener tanto el backend como el frontend funcionando correctamente. ¡Buena suerte con la prueba técnica!