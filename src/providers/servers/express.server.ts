import { envs } from "@helpers/envs.helper";
import { ServerInterface } from "@interfaces/server.interface";
import express, { Express, Router } from "express";

class ExpressServerProvider implements ServerInterface<Express, Router> {
  protected app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  init() {
    this.app.listen(envs.SERVER_PORT, () => {
      console.log("Server is running on port ", envs.SERVER_PORT);
    });
  }

  use(...parms: Express[]) {
    return this.app.use(parms);
  }

  route(path?: string, ...parms: Router[]) {
    this.app.use(path, ...parms);
  }
}

export { ExpressServerProvider };
