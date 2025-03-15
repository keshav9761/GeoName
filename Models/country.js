const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    short_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true
    },
    currency: {
        type: String,
        required: true,
        trim: true
    },
    continent: {
        type: String,
        required: true,
        trim: true,
        default: 'Unknown'
    }
}, { timestamps: true });

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;
