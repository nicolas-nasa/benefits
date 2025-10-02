import swaggerUi from "swagger-ui-express";
import swaggerFile from "@helpers/swagger_output.json";
import { Router } from "@providers/router.provider";

const swaggerRoutes = Router();

swaggerRoutes.use(swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { swaggerRoutes };
