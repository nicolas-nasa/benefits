import {
  ControllerInterface,
  RouterInterface,
} from "@interfaces/index.interfaces";
import { Router, Request, Response } from "express";

type request = Request;
type response = Response;

class ExpressRouterProvider
  implements RouterInterface<ControllerInterface<Request, Response>, Router>
{
  protected router: Router;

  constructor() {
    this.router = Router();
  }
  get(
    path: string,
    controller: ControllerInterface<Request, Response>
  ): Router {
    return this.router.get(path, controller.index);
  }

  post(
    path: string,
    controller: ControllerInterface<Request, Response>
  ): Router {
    return this.router.post(path, controller.index);
  }

  put(
    path: string,
    controller: ControllerInterface<Request, Response>
  ): Router {
    return this.router.put(path, controller.index);
  }

  delete(
    path: string,
    controller: ControllerInterface<Request, Response>
  ): Router {
    return this.router.delete(path, controller.index);
  }

  routers(): Router {
    return this.router;
  }
}

export { ExpressRouterProvider, request, response };
