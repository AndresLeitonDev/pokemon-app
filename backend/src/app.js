const express = require('express');
const cors = require('cors');

const { connectMongoDB } = require('./config/db.mongodb');

const postgresRoutes = require('./routes/pokemon.routes');
const mongoRoutes = require('./routes/pokemon.mongodb.routes');

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 conectar Mongo SOLO UNA VEZ
connectMongoDB();

// rutas
app.use('/api/pokemon', postgresRoutes);
app.use('/api/pokemon-mongodb', mongoRoutes);

app.get('/', (req, res) => {
  res.json({
    message: '🐱‍👤 Pokemon API Funcionando!',
    endpoints: {
      postgres: '/api/pokemon/:name',
      mongodb_all: '/api/pokemon-mongodb',
      mongodb_one: '/api/pokemon-mongodb/:name',
    }
  });
});

module.exports = app;