import { routes } from "@routes/index.routes";
import express, { Express } from "express";

const server: Express = express();

server.use(express.json());

server.use(routes);

export { server };
