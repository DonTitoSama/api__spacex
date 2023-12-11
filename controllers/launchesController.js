const Launches = require('../models/launchesModels');
const launchesProvider = require('../providers/launchesProvider');


exports.listAllLaunches = async (req, res) => {
    try {
        const launches = await Launches.find({});
        res.status(200);
        res.json(launches);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

exports.createALaunche = async (req, res) => {
    try {
        let newLaunche = new Launches(req/body);

        let randomTextPromise = launchesProvider.getRandomText();

        let response = await randomTextPromise;

        if(!newPost.content) {
            newPost.content = response;
        }

        let post = await newLaunche.save();
        res.status(201).json(post);

    } catch  (error) {
        console.error(error);
        res.status(401).json({message: "requete invalide"});
    }
}