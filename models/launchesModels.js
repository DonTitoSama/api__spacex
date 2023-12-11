const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let launchesSchema = new Schema ({
    flight_id: {
        type: String,
        required: true
    },
    flight_number: {
        type: Number,
        required: true
    },
    mission_name: {
        type: String,
        required: true
    },
    mission_id: {
        type: Number,
        required: true
    },
    launch_year: {
        type: Date,
        default: Date.now,
        required: true
    },
});

module.exports = mongoose.model('Launches', launchesSchema);