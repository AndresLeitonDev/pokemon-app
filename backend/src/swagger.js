const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pokemon API",
      version: "1.0.0",
      description: "API de Pokemones con Express y MySQL"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/routes/*.js"] // 👈 aquí leerá los comentarios
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;