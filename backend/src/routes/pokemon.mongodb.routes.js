// pokemon.mongodb.routes.js - Define los endpoints (URLs) para MongoDB

const router = require('express').Router();
const controller = require('../controllers/pokemon.mongodb.controller');

/**
 * @swagger
 * /api/pokemon-mongodb:
 *   get:
 * summary: Obtener todos los Pokemón de MongoDB
 * description: Retorna la lista completa de Pokemón almacenados en MongoDB Atlas
 * responses:
 *   200:
 * description: Lista de Pokemón obtenida exitosamente
 *   500:
 * description: Error del servidor
 */
router.get('/', controller.getAllPokemon);

/**
 * @swagger
 * /api/pokemon-mongodb/{name}:
 *   get:
 * summary: Obtener un Pokemón por nombre desde MongoDB
 * description: Busca un Pokemón específico en MongoDB Atlas por su nombre
 * parameters:
 *   - in: path
 *     name: name
 *     required: true
 *     description: Nombre del Pokemón
 *     schema:
 *       type: string
 * responses:
 *   200:
 * description: Pokemón encontrado
 *   404:
 * description: Pokemón no encontrado
 *   500:
 * description: Error del servidor
 */
router.get('/:name', controller.getPokemonByName);

module.exports = router;