const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meditator's Node Express API with Swagger",
      version: "0.0.1",
      description: "API 문서입니다.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      }
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme:"bearer",
          bearerFormat:"JWT"
        },
      },
    },
    security: [
      {
        bearerAuth: [],  
      }
    ],
    servers: [{
      url: "http://localhost:3001/api",
    }],
  },
  apis: ["./src/routes/*.js"],
};
const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};