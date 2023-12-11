const Post = require('../models/launchesModels');
const launchesProvider = require('../providers/launchesProvider');


exports.listAllLaunches = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

exports.createALaunche = async (req, res) => {
    try {
        let newPost = new Post(req/body);

        let randomTextPromise = launchesProvider.getRandomText();

        let response = await randomTextPromise;

        if(!newPost.content) {
            newPost.content = response;
        }

        let post = await newPost.save();
        res.status(201).json(post);

    } catch  (error) {
        console.error(error);
        res.status(401).json({message: "requete invalide"});
    }
}

exports.modifiedAPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id_post, req.body, {new: true});
        res.status(200);
        res.json(post);
    } catch (error) {
        res.status(500);
        res.json({message: 'Erreur serveur'});
    }
}