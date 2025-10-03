import { ControllerInterface } from "@interfaces/controller.interface";
import { Request, Response } from "@providers/router.provider";
import { BenefitService } from "services/benefit.service";

class ListBenefitController implements ControllerInterface<Request, Response> {
  private service: BenefitService;

  constructor(service: BenefitService) {
    this.service = service;
  }
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const { limit, page } = req.query;
      if (typeof limit !== "string" || typeof page !== "string")
        return res.send({ message: "invalid values" }).status(400);

      if (req.query) {
        return res.send({ message: `Find Benefit ${req.query}` });
      }
      console.log(
        await this.service.list({
          limit: parseInt(limit),
          page: parseInt(page),
        })
      );
      return res.send({ message: "Find Benefit" });
    } catch (err) {
      return res.send({ message: "internal server error" }).status(500);
    }
  }
}

export { ListBenefitController };
