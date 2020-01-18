const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response) {
        const { latitude, longitude, techs } = request.body;
        //Find all devs within a 10km radius
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location: {
                $near: {
                    type: 'Point',
                    coordinates: [ longitude,latitude ]
                },
                $maxDistance: 10000,
            }
        });

        return response.json({ devs: [] });
    }
}