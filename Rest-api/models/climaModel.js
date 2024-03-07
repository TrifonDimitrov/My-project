const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const modelShema = new mongoose.Schema({
    climaModel: {
        type: String,
        required: true
    },
    energyClass: {
        type: String,
        required: true
    },
    coolingCapacity: {
        type: Number,
        required: true
    },
    heatingCapacity: {
        type: Number,
        required: true
    },
    powerConsumption: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }, 
}, {timestamps: {createdAt: 'created_at'}});

module.exports = mongoose.model('Model', modelShema);
