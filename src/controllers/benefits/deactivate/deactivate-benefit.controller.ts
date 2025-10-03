import { ControllerInterface } from "@interfaces/controller.interface";
import { Request, Response } from "@providers/router.provider";
import { BenefitService } from "services/benefit.service";

class DeactivateBenefitController
  implements ControllerInterface<Request, Response>
{
  private service: BenefitService;

  constructor(service: BenefitService) {
    this.service = service;
  }

  async index(req: Request, res: Response): Promise<Response> {
    if (req.params.id) {
      //find one
      return res.send({ message: `Find Benefit ${req.params.id}` });
    }
    return res.send({ message: "Find Benefit" });
  }
}

export { DeactivateBenefitController };
