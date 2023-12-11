const axios = require("axios");

// utilisation de l'API de space X
const baseUrl = 'https://api.spacexdata.com/v3/launches';

// définition d'un méthode listAll qui récupère tous les launches en utilisant axios
exports.listAll = async () => {
    let response =  await axios.get(baseUrl);
    return response.data;
}

