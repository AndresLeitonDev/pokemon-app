const router = require('express').Router();
const controller = require('../controllers/pokemon.mongodb.controller');

/**
 * @swagger
 * /api/pokemon-mongodb:
 *   get:
 *     summary: Obtener todos los Pokemon de MongoDB
 *     description: Retorna la lista completa de Pokemon almacenados en MongoDB Atlas
 *     responses:
 *       200:
 *         description: Lista de Pokemon obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get('/', controller.getAllPokemon);

/**
 * @swagger
 * /api/pokemon-mongodb/{name}:
 *   get:
 *     summary: Obtener un Pokemon por nombre desde MongoDB
 *     description: Busca un Pokemon especifico en MongoDB Atlas por su nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre del Pokemon
 *         schema:
 *           type: string
 *           example: pikachu
 *     responses:
 *       200:
 *         description: Pokemon encontrado
 *       404:
 *         description: Pokemon no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:name', controller.getPokemonByName);

module.exports = router;