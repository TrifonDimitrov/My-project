const climaModel = require("../models/climaModel");

function getAll(req, res, next) {
  climaModel
    .find()
    .populate("owner")
    .then((climas) => res.json(climas))
    .catch(next);
}

function getClima(req, res, next) {
  const { climaId } = req.params;
  climaModel
    .findById(climaId)
    .populate({
      path: "owner",
    })
    .then((clima) => res.json(clima))
    .catch(next);
}

function createClima(req, res, next) {
  const {
    brand,
    model,
    coolingCapacity,
    heatingCapacity,
    energyEfficiencyRating,
    price,
    description,
    imageUrl,
  } = req.body;
  const { _id: owner } = req.user;
  climaModel
    .create({
      brand,
      model,
      coolingCapacity,
      heatingCapacity,
      energyEfficiencyRating,
      price,
      description,
      imageUrl,
      owner,
    })
    .then((clima) => res.json(clima))
    .catch(next);
}

module.exports = {
  getAll,
  getClima,
  createClima,
};
