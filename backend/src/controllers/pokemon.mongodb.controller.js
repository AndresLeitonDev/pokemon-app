// pokemon.mongodb.controller.js - Controlador para MongoDB
const mongoDBService = require('../services/pokemon.mongodb.service');

const getAllPokemon = async (req, res) => {
  try {
    const pokemons = await mongoDBService.getAllPokemonFromMongoDB();
    
    res.json({
      success: true,
      count: pokemons.length,
      data: pokemons,
      source: 'MongoDB Atlas'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener Pokémon de MongoDB',
      error: error.message
    });
  }
};

const getPokemonByName = async (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = await mongoDBService.getPokemonByNameFromMongoDB(name);
    
    if (!pokemon) {
      return res.status(404).json({
        success: false,
        message: `Pokémon "${name}" no encontrado en MongoDB`
      });
    }
    
    res.json({
      success: true,
      data: pokemon,
      source: 'MongoDB Atlas'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al buscar Pokémon',
      error: error.message
    });
  }
};

module.exports = {
  getAllPokemon,
  getPokemonByName
};