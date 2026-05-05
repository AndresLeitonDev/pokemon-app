// pokemon.controller.js - Controlador para PostgreSQL
const service = require("../services/pokemon.service");

const getPokemon = async (req, res) => {
  const { name } = req.params;
  
  try {
    const pokemon = await service.getPokemonByName(name);
    
    if (!pokemon) {
      return res.status(404).json({ message: "Pokémon no encontrado" });
    }
    
    res.json(pokemon);
  } catch (err) {
    console.error("Error en controlador:", err);
    res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = { getPokemon };