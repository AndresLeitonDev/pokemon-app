const router = require("express").Router();
const controller = require("../controllers/pokemon.controller");
/**
 * @swagger
 * /api/pokemon/{name}:
 *   get:
 *     summary: Obtener un Pokemon por nombre
 *     description: Retorna la informacion de un Pokemon desde PostgreSQL
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
router.get("/:name", controller.getPokemon);

module.exports = router;