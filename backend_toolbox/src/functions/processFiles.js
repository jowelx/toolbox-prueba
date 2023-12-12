import downloadFile from "./downloadFile.js";
import formatCSV from "./formatData.js";
const processFiles = async (files) => {
    const formattedData = [];

    for (const file of files) {
        try {
            const fileData = await downloadFile(file);
            const processedData = formatCSV(fileData);
            if (processedData.length > 0) {

                formattedData.push({ file, lines: processedData });
            }
        } catch (error) {
            console.error(`Error processing file ${file}: ${error.message}`);
        }
    }

    return formattedData;
};
export default processFiles