import axios from 'axios'
const getFiles = async () => {
    const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', {
        headers: { 'Authorization': 'Bearer aSuperSecretKey' }
    });
    return response.data.files;
};
export default getFiles