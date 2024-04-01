const climaModel = require("../models/climaModel");

function getAll(req, res, next) {
    climaModel.find()
        .populate('owner')
        .then(climas => res.json(climas))
        .catch(next);
}


module.exports = {
  getAll,
};