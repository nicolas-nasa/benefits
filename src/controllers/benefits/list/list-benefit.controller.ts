import { ControllerInterface } from "@interfaces/controller.interface";
import { Request, Response } from "@providers/router.provider";

class ListBenefitController implements ControllerInterface<Request, Response> {
  async index(req: Request, res: Response): Promise<Response> {
    if (req.params.id) {
      //find one
      return res.send({ message: `Find Benefit ${req.params.id}` });
    }
    return res.send({ message: "Find Benefit" });
  }
}

export { ListBenefitController };
