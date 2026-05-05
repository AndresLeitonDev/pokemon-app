const router = require("express").Router();
const controller = require("../controllers/pokemon.controller");
/**
 * @swagger
 * /api/pokemon/{name}:
 *   get:
 *     summary: Obtener un Pokémon por nombre
 *     description: Retorna la información de un Pokémon desde la base de datos
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre del Pokémon
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pokémon encontrado
 *       404:
 *         description: Pokémon no encontrado
 */
router.get("/:name", controller.getPokemon);

module.exports = router;