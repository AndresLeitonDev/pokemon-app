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
        url: process.env.API_URL || "http://localhost:3000",
        description: "Servidor local"
      },
      {
        url: "https://pokemon-app-ciqf.onrender.com",
        description: "Servidor en la nube (Render)"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;