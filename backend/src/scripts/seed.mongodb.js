// seed.mongodb.js - Script limpio para cargar 10 Pokémon en MongoDB Atlas

const mongoose = require("mongoose");
const Pokemon = require("../models/pokemon.model");

// ✅ URI CORRECTO (SIN cosas raras)
const MONGODB_URI =
  "mongodb+srv://andreshleiton_db_user:hhq2Id0NGhADDUZ8@cluster0.ijct52m.mongodb.net/pokemon_db?retryWrites=true&w=majority";

// 📦 Datos
const pokemonsToInsert = [
  {
    name: "pikachu",
    abilities: ["static", "lightning-rod"],
    types: ["electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    baseExperience: 112,
    weight: 60,
    height: 4,
  },
  {
    name: "charmander",
    abilities: ["blaze", "solar-power"],
    types: ["fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    baseExperience: 62,
    weight: 85,
    height: 6,
  },
  {
    name: "bulbasaur",
    abilities: ["overgrow", "chlorophyll"],
    types: ["grass", "poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    baseExperience: 64,
    weight: 69,
    height: 7,
  },
  {
    name: "squirtle",
    abilities: ["torrent", "rain-dish"],
    types: ["water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    baseExperience: 63,
    weight: 90,
    height: 5,
  },
  {
    name: "eevee",
    abilities: ["run-away", "adaptability"],
    types: ["normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    baseExperience: 65,
    weight: 65,
    height: 3,
  },
  {
    name: "mew",
    abilities: ["synchronize"],
    types: ["psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    baseExperience: 270,
    weight: 40,
    height: 4,
  },
  {
    name: "snorlax",
    abilities: ["immunity", "thick-fat"],
    types: ["normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    baseExperience: 189,
    weight: 4600,
    height: 21,
  },
  {
    name: "lucario",
    abilities: ["inner-focus", "steadfast"],
    types: ["fighting", "steel"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    baseExperience: 184,
    weight: 540,
    height: 12,
  },
  {
    name: "gengar",
    abilities: ["cursed-body"],
    types: ["ghost", "poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    baseExperience: 225,
    weight: 405,
    height: 15,
  },
  {
    name: "dragonite",
    abilities: ["inner-focus", "multiscale"],
    types: ["dragon", "flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    baseExperience: 300,
    weight: 2100,
    height: 22,
  },
];

// 🚀 Función principal
const seedDatabase = async () => {
  try {
    console.log("🔄 Conectando a MongoDB Atlas...");

    // ✅ conexión limpia
    await mongoose.connect(MONGODB_URI);

    console.log("🔥 MongoDB Atlas conectado");

    // 🧹 limpiar colección
    await Pokemon.deleteMany();
    console.log("🗑️ Colección limpiada");

    // 📥 insertar datos
    const inserted = await Pokemon.insertMany(pokemonsToInsert);

    console.log(`✨ ${inserted.length} Pokémon insertados:`);

    inserted.forEach((p) => {
      console.log(`   - ${p.name}`);
    });

    console.log("🎉 Seed completado exitosamente!");
  } catch (error) {
    console.error("❌ Error en seed:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 Conexión cerrada");
  }
};

// ▶ ejecutar
seedDatabase();