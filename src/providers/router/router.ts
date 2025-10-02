import {
  ControllerInterface,
  RouterInterface,
} from "@interfaces/index.interfaces";

class RouterProvider<Response, Request, R>
  implements RouterInterface<ControllerInterface<Request, Response>, R>
{
  protected router: RouterInterface<ControllerInterface<Request, Response>, R>;

  constructor(
    router: RouterInterface<ControllerInterface<Request, Response>, R>
  ) {
    this.router = router;
  }

  get(path: string, controller: ControllerInterface<Request, Response>): R {
    return this.router.get(path, controller);
  }

  post(path: string, controller: ControllerInterface<Request, Response>): R {
    return this.router.post(path, controller);
  }

  put(path: string, controller: ControllerInterface<Request, Response>): R {
    return this.router.put(path, controller);
  }

  delete(path: string, controller: ControllerInterface<Request, Response>): R {
    return this.router.delete(path, controller);
  }

  routers(): R {
    return this.router.routers();
  }
}

export { RouterProvider };
