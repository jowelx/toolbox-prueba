import axios from "axios";
const downloadFile = async (file) => {
    const response = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, {
        headers: { 'Authorization': 'Bearer aSuperSecretKey' }
    });
    return response.data;
};

export default downloadFile;