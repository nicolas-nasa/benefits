interface ServerInterface<T, R> {
  init: () => void;
  use: (...parms: T[]) => T;
  route: (path?: string, ...parms: R[]) => void;
}

export { ServerInterface };
