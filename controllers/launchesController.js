const Launches = require('../models/launchesModels');
const launchesProvider = require('../providers/launchesProvider');

exports.getAllLaunches = async (req, res) => {
  try {
    const response = await launchesProvider.get('launches');
    const launches = response.data;

    res.json(launches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite' });
  }
};

