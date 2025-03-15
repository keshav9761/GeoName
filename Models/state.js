const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: true
    },
    short_name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    }
}, { timestamps: true });

const State = mongoose.model('State', stateSchema);
module.exports = State;
