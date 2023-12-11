const Launches = require('../models/launchesModels');
const launchesProvider = require('../providers/launchesProvider');


// méthode pour lister les launches (via PostMan)

exports.getAllLaunches = async (req, res) => {
  try {
    const response = await launchesProvider.listAll();

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite' });
  }
};

// méthode pour injecter les launches en base de données (MongoDB)

exports.postAllLaunches = async (req, res) => {
  try {    
    const response = await launchesProvider.listAll();
    
    const savedLaunches = [];

    await Promise.all(response.map(async (launchData) => {
      const launch = new Launches(launchData);
      await launch.save();
      savedLaunches.push(launch);
    }));

    res.status(201).json(savedLaunches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite' });
  }
};
