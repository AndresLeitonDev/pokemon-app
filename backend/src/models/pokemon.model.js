const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  abilities: { type: [String], required: true },
  types: { type: [String], required: true },
  image: { type: String, required: true },
  baseExperience: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;