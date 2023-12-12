const formatCSV = (fileData) => {
    const lines = fileData.split('\n');
    const formattedLines = [];

    for (const line of lines) {
        const [title, text, number, hex,] = line.split(',');
        const isHexadecimal = /^[0-9a-fA-F]{32}/.test(hex);
        if (title && text && parseInt(number) && isHexadecimal) {
            formattedLines.push({ file: title, text, number: parseInt(number), hex });
        }
    }

    return formattedLines;
};
export default formatCSV;