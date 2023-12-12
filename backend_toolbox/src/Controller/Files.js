import getFiles from "../functions/getFiles.js";
import processFiles from "../functions/processFiles.js";
export const GetFiles = async (req, res) => {
    try {
        const files = await getFiles();
        const formattedData = await processFiles(files);
        res.json(formattedData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' + error });
    }
}
export const GetList = async (req, res) => {
    try {
        const files = await getFiles();
        res.json(files);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' + error });
    }
}
export const GetFile = async (req, res) => {
    try {
        const fileName = req.query.fileName;
        if (!fileName) {
            res.json({ error: "no se ha proveido un archivo valido en la busqueda" })
        }
        const formattedData = await processFiles([fileName]);
        if (!formattedData.length > 0) {
            res.json({ message: 'Don´t find file' })
        } else {

            res.json(formattedData);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' + error })
    }

}