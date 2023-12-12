import cors from "cors";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import Routes from "./routes/routes.js";
const app = express();
const ApiName = 'toolbox'
const Port = 8000
const startServer = () => {
    // Permite que la aplicación maneje solicitudes con cuerpo en formato urlencoded
    app.use(bodyParser.json({ limit: `10mb` }));
    app.use(bodyParser.urlencoded({ limit: `10mb`, extended: true }));
    // Configura CORS para la aplicación
    app.use(cors());
    // Permite que la aplicación maneje solicitudes con cuerpo en formato JSON
    app.use(express.json());
    // Registra las solicitudes HTTP que llegan a la aplicación
    app.use(morgan("dev"));
    // Configura una ruta base para todas las rutas de Overfox
    app.use(`/${ApiName}/api`, Routes);

    // Inicia el servidor de express en el puerto especificado
    app.listen(Port, () => {
        console.log(`${"Server running on port"} ${Port}`);
    });
};

export default startServer;
