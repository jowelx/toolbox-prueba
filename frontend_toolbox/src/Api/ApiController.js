import axios from "axios";
// Define the base URL for the API
export const Domain = 'http://localhost:8000/'

// Define the base route for the API
const Route = `${Domain}toolbox/api`;
const api = axios.create({
    baseURL: Route,

});

// Create an object to hold API methods
const ApiController = {
    // Define a method to GET the server using axios
    getFilesList: () => api.get(Route + '/files/list'),
    getAllFiles: () => api.get(Route + '/getfiles'),
    getFile: (name) => api.get(Route + `/files/data?fileName=${name}`)
};

// Export the ApiController object as the default export
export default ApiController;
