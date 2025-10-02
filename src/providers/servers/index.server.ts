import { ServerProvider } from "./server";
import { ExpressServerProvider } from "./express.server";

const server = new ServerProvider(new ExpressServerProvider());

export { server };
