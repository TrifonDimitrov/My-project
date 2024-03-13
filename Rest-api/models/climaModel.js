const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const ClimateSchema = new mongoose.Schema({
    owner: {
        type: ObjectId,
        ref: 'User', 
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    coolingCapacity: {
        type: Number,
        required: true
    },
    heatingCapacity: Number,
    energyEfficiencyRating: {
        type: String,
        enum: ['A+++', 'A++', 'A+', 'A', 'B', 'C'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    imageUrl: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Climate', ClimateSchema);
