const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pokemon API",
      version: "1.0.0",
      description: "API de Pokemones con PostgreSQL y MongoDB"
    },
    servers: [
      {
        url: "https://pokemon-app-ciqf.onrender.com"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;