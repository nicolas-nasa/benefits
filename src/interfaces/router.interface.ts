interface RouterInterface<ControllerInterface, R> {
  get: (path: string, controler: ControllerInterface) => R;
  post: (path: string, controler: ControllerInterface) => R;
  put: (path: string, controler: ControllerInterface) => R;
  delete: (path: string, controler: ControllerInterface) => R;
  routers(): R;
}

export { RouterInterface };
