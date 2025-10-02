interface ControllerInterface<Request, Response> {
  index: (req: Request, res: Response) => Promise<Response>;
}

export { ControllerInterface };
