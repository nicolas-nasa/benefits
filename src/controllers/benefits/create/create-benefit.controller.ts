import { ControllerInterface } from "@interfaces/controller.interface";
import { Request, Response } from "@providers/router.provider";
import { BenefitService } from "services/benefit.service";

class CreateBenefitController
  implements ControllerInterface<Request, Response>
{
  private service: BenefitService;

  constructor(service: BenefitService) {
    this.service = service;
  }
  public async index(req: Request, res: Response): Promise<Response> {
    if (req.params.id) {
      return res.send({ message: `Find Benefit ${req.params.id}` });
    }
    console.log(await this.service.create({ names: "TESTE" }));
    return res.send({ message: "Find Benefit" });
  }
}

export { CreateBenefitController };
