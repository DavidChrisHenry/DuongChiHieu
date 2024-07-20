/** @format */

// swagger.ts
import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: ``,
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name,email,country"],
          properties: {
            id: {
              type: "string",
              description: "The auto-generated id of the user",
              readOnly: true,
            },
            name: {
              type: "string",
              description: "The name of the user",
            },
            email: {
              type: "string",
              description: "The email of the user",
            },
            country: {
              type: "string",
              description: "The country of the user",
            },
          },
        },
      },
    },
  },
  apis: [path.resolve(__dirname, "../users/routes/index.ts")],
};

const specs = swaggerJsdoc(options);

export default function setupSwagger(app: Express) {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
}
