interface ControllerInterface<T, R> {
  index: (req: T, res: R) => Promise<R>;
}

export { ControllerInterface };
