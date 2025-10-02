import { ControllerInterface } from "@interfaces/controller.interface";
import { request, response } from "@providers/router/index.router";

class DeactivateBenefitController implements ControllerInterface<request, response> {
  async index(req: request, res: response): Promise<response> {
    if (req.params.id) {
      //find one
      return res.send({ message: `Find Benefit ${req.params.id}` });
    }
    return res.send({ message: "Find Benefit" });
  }
}

export { DeactivateBenefitController };
