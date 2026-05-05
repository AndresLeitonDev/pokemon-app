// pokemon.service.js - Servicio para PostgreSQL (Supabase)
const pool = require("../config/db.postgres");

const getPokemonByName = async (name) => {
  console.log("🔍 Buscando en PostgreSQL:", name);
  
  try {
    const query = "SELECT * FROM pokemons WHERE LOWER(name) = LOWER($1)";
    const result = await pool.query(query, [name]);
    
    console.log("📦 Resultado PostgreSQL:", result.rows);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const pokemon = result.rows[0];
    return {
      name: pokemon.name,
      abilities: pokemon.abilities.split(", "),
      types: ["electric", "fire", "water", "grass", "poison", "normal", "fighting"],
      image: pokemon.frontimage,
      baseExperience: 100,
      weight: pokemon.weight,
      height: pokemon.height,
      source: "Supabase PostgreSQL",
    };
  } catch (error) {
    console.error("❌ Error en PostgreSQL:", error.message);
    throw error;
  }
};

module.exports = { getPokemonByName };