const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const outputFile = "./src/helpers/swagger_output.json";
const endpointsFiles = ["./src/routes/index.routes.ts"];

const doc = {
  info: {
    version: "1.0.0",
    title: "API de Gestão de beneficios",
    description: "",
  },
  host: `localhost:3000`,
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
  ],
  definitions: {
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
