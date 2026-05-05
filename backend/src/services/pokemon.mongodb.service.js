// pokemon.mongodb.service.js - Servicio para MongoDB
const Pokemon = require('../models/pokemon.model');

const getAllPokemonFromMongoDB = async () => {
  try {
    const pokemons = await Pokemon.find({}).lean();
    console.log(`📦 MongoDB: Se encontraron ${pokemons.length} Pokémon`);
    return pokemons;
  } catch (error) {
    console.error('❌ Error en MongoDB:', error.message);
    throw error;
  }
};

const getPokemonByNameFromMongoDB = async (name) => {
  try {
    const pokemon = await Pokemon.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    }).lean();
    
    if (pokemon) {
      console.log(`🔍 MongoDB: Pokémon encontrado -> ${pokemon.name}`);
    }
    return pokemon;
  } catch (error) {
    console.error('❌ Error en MongoDB:', error.message);
    throw error;
  }
};

module.exports = {
  getAllPokemonFromMongoDB,
  getPokemonByNameFromMongoDB,
};