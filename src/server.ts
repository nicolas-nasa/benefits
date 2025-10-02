import { server } from "@providers/servers/index.server";
import { router } from "routes/index.routes";

server.init();
router.routers();
