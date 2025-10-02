import { ServerInterface } from "@interfaces/server.interface";

class ServerProvider<T, R> {
  protected app: ServerInterface<T, R>;

  constructor(app: ServerInterface<T, R>) {
    this.app = app;
  }

  init() {
    this.app.init();
  }

  use(...parms: T[]) {
    this.app.use(...parms);
  }

  route(path?: string, ...parms: R[]) {
    this.app.route(path, ...parms);
  }
}

export { ServerProvider };
