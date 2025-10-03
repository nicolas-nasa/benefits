import { ControllerInterface } from "@interfaces/controller.interface";
import { Request, Response } from "@providers/router.provider";
import { BenefitService } from "services/benefit.service";

class ActivateBenefitController
  implements ControllerInterface<Request, Response>
{
  private service: BenefitService;

  constructor(service: BenefitService) {
    this.service = service;
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    if (id) {
      await this.service.activate(id);
      return res.send({
        message: `Find Benefit `,
      });
    }
    return res.send({ message: "Find Benefit" });
  }
}

export { ActivateBenefitController };
