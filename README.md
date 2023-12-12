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
## Accede a la carpeta frontend_toolbox.

```cd frontend_toolbox```

## Instala las dependencias utilizando el siguiente comando:


```npm install```
```npm i```

## Después de la instalación de las dependencias, inicia el servidor frontend con el siguiente comando:

```npm start```

## El frontend estará disponible en http://localhost:3000

¡Listo! Ahora deberías tener tanto el backend como el frontend funcionando correctamente. 

## Funcionamiento de la aplicacion 

La aplicacion contiene una unica pantalla, abajo del titulo contendra 3 botones que permitira navegar entre las distintas tablas

### Boton "List Files" permitira mostar el listado de los archivos, solo mostrando su nombre

### Boton "All Files" permitira mostar el contenido filtrador de todos los archivos,mostrando su nombre, el texto, el numero y su valor hexadecimal

### Boton "Search File" permitira buscar un archivo especifico el cual se buscara automaticamente luego de que el usuario deje de escribir en el campo de busqueda, para que este funcione, debes introducir el nombre completo del archivo ejemplo: test9.csv, al encontrar un archivo se va a mostrar su nombre, el texto, el numero y su valor hexadecimal

 