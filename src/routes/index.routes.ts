import { server } from "@providers/servers/index.server";
import { benefitsRouter } from "./benefits.route";
import { router } from "@providers/router/index.router";

server.route("/benefits", benefitsRouter.routers());

export { router };
