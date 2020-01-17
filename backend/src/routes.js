const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs',  async (request, response) => {
    const { github_username } =request.body;

    const apiResponse = await axios.get(`https://api.gitnuh.com/users/${github_username}`);

    console.log(apiResponse.data);

    return response.json({ message:'Hello World Omnistack!'});
});

module.exports = routes;