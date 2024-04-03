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
      owner: req.user._id,
    })
    .then((clima) => {
      // След като получите резултата, извикайте .populate() за да популирате връзките
      return climaModel.populate(clima, { path: "climates" });
    })
    .then((populatedClima) => {
      res.status(201).json(populatedClima);
    })
    .catch(next);
}

function updateClima(req, res, next) {
  const { climaId } = req.params;
  console.log(req.params);
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

  climaModel
    .updateOne(
      {
        brand,
        model,
        coolingCapacity,
        heatingCapacity,
        energyEfficiencyRating,
        price,
        description,
        imageUrl,
        climaId,
      }
    )
    .then((updatedClima) => res.json(updatedClima))
    .catch(next);
}

module.exports = {
  getAll,
  getClima,
  createClima,
  updateClima,
};
