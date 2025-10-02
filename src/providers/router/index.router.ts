import { ExpressRouterProvider, request, response } from "./express.router";
import { RouterProvider } from "./router";

const router = new RouterProvider(new ExpressRouterProvider());

export { router, request, response };
