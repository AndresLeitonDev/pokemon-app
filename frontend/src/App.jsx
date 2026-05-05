// App.jsx - Componente principal con diseño futurista anime
import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  // Estado para almacenar los datos de los Pokémon
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeSource, setActiveSource] = useState(null); // 'postgres' o 'mongodb'

  // URLs de nuestro backend en localhost
  const API_URLS = {
    postgres: 'http://localhost:3000/api/pokemon',
    mongodb: 'http://localhost:3000/api/pokemon-mongodb'
  };

  // Función para consultar TODOS los Pokémon de MongoDB
  const fetchAllFromMongoDB = async () => {
    setLoading(true);
    setError(null);
    setActiveSource('mongodb_all');
    
    try {
      const response = await axios.get(API_URLS.mongodb);
      setPokemonData(response.data);
    } catch (err) {
      setError('Error al cargar Pokémon desde MongoDB');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Función para consultar un Pokémon específico de PostgreSQL
  const fetchPokemonFromPostgres = async (name) => {
    setLoading(true);
    setError(null);
    setActiveSource('postgres');
    
    try {
      const response = await axios.get(`${API_URLS.postgres}/${name.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError(`Pokémon "${name}" no encontrado en PostgreSQL`);
      } else {
        setError('Error al consultar PostgreSQL');
      }
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  // Función para consultar un Pokémon específico de MongoDB
  const fetchPokemonFromMongoDB = async (name) => {
    setLoading(true);
    setError(null);
    setActiveSource('mongodb');
    
    try {
      const response = await axios.get(`${API_URLS.mongodb}/${name.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError(`Pokémon "${name}" no encontrado en MongoDB`);
      } else {
        setError('Error al consultar MongoDB');
      }
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  // Manejador del formulario
  const handleSubmit = (e, source, pokemonName) => {
    e.preventDefault();
    if (source === 'postgres') {
      fetchPokemonFromPostgres(pokemonName);
    } else {
      fetchPokemonFromMongoDB(pokemonName);
    }
  };

  return (
    <div className="app">
      {/* Fondo futurista con partículas */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      {/* Contenido principal */}
      <div className="container">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="glitch" data-text="POKÉMON API">POKÉMON API</h1>
          <p className="subtitle">⚡ Base de Datos Relacional & No Relacional ⚡</p>
        </motion.header>

        {/* Tarjetas de consulta */}
        <div className="cards-container">
          
          {/* Tarjeta PostgreSQL */}
          <motion.div 
            className="card postgres-card"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-header">
              <span className="icon">🐘</span>
              <h2>PostgreSQL</h2>
              <span className="badge">Supabase Cloud</span>
            </div>
            <p className="card-desc">Base de datos relacional en la nube</p>
            
            <form onSubmit={(e) => {
              const input = e.target.querySelector('input');
              handleSubmit(e, 'postgres', input.value);
              input.value = '';
            }}>
              <input 
                type="text" 
                placeholder="Nombre del Pokémon (ej: pikachu)" 
                className="input-futuristic"
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-postgres"
              >
                🔍 Consultar
              </motion.button>
            </form>
          </motion.div>

          {/* Tarjeta MongoDB - Todos */}
          <motion.div 
            className="card mongodb-card"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card-header">
              <span className="icon">🍃</span>
              <h2>MongoDB Atlas</h2>
              <span className="badge">No Relacional</span>
            </div>
            <p className="card-desc">Base de datos NoSQL + 10 Pokémon precargados</p>
            
            <motion.button 
              onClick={fetchAllFromMongoDB}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-mongodb"
            >
              📦 Ver todos los Pokémon
            </motion.button>
            
            <form onSubmit={(e) => {
              const input = e.target.querySelector('input');
              handleSubmit(e, 'mongodb', input.value);
              input.value = '';
            }}>
              <input 
                type="text" 
                placeholder="O busca uno específico" 
                className="input-futuristic"
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-mongodb-small"
              >
                🔍 Buscar
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Área de resultados */}
        <AnimatePresence>
          {(loading || pokemonData || error) && (
            <motion.div 
              className="results"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <div className="results-header">
                <span className="pulse"></span>
                <h3>RESULTADOS</h3>
                {activeSource && (
                  <span className="source-badge">
                    Fuente: {activeSource.includes('postgres') ? 'PostgreSQL' : 'MongoDB'}
                  </span>
                )}
              </div>
              
              {loading ? (
                <div className="loader">
                  <div className="pokeball"></div>
                  <p>Cargando datos...</p>
                </div>
              ) : error ? (
                <div className="error-message">
                  <span>⚠️</span>
                  <p>{error}</p>
                </div>
              ) : pokemonData && (
                <div className="pokemon-display">
                  <PokemonCard data={pokemonData} source={activeSource} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Componente para mostrar un Pokémon individual o lista
function PokemonCard({ data, source }) {
  // Si es la lista de MongoDB (todos los Pokémon)
  if (Array.isArray(data.data) || (source === 'mongodb_all' && data.data)) {
    const pokemons = data.data || data;
    return (
      <div className="pokemon-grid">
        {pokemons.map(pokemon => (
          <div key={pokemon.name} className="pokemon-card-mini">
            <img src={pokemon.image} alt={pokemon.name} />
            <h4>{pokemon.name.toUpperCase()}</h4>
            <div className="types">
              {pokemon.types?.map(type => (
                <span key={type} className={`type ${type}`}>{type}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // Si es un Pokémon individual
  const pokemon = data.data || data;
  return (
    <div className="pokemon-card-large">
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <h2>{pokemon.name?.toUpperCase()}</h2>
        <div className="info-row">
          <span className="label">Habilidades:</span>
          <span className="value">{pokemon.abilities?.join(', ')}</span>
        </div>
        <div className="info-row">
          <span className="label">Tipos:</span>
          <div className="types">
            {pokemon.types?.map(type => (
              <span key={type} className={`type ${type}`}>{type}</span>
            ))}
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <span>⚡ Experiencia</span>
            <strong>{pokemon.baseExperience}</strong>
          </div>
          <div className="stat">
            <span>⚖️ Peso</span>
            <strong>{pokemon.weight} kg</strong>
          </div>
          <div className="stat">
            <span>📏 Altura</span>
            <strong>{pokemon.height} dm</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;