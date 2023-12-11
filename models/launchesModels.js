const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// création du model Launches
let launchesSchema = new Schema ({
    flight_id: {
        type: String
    },
    flight_number: {
        type: Number
    },
    mission_name: {
        type: String
    },
    mission_id: {
        type: Schema.Types.Mixed,
    },
    launch_year: {
        type: Date
    },
});

module.exports = mongoose.model('Launch', launchesSchema);