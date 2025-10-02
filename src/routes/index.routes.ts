import { benefitsRoutes } from "./benefits.route";
import { Router } from "@providers/router.provider";
import { swaggerRoutes } from "./swagger.routes";

const routes = Router();

routes.use("/benefits", benefitsRoutes);
routes.use("/", swaggerRoutes);

export { routes };
