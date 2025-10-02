import { benefitsControllers } from "@controllers/index.controllers";
import { Router } from "@providers/router.provider";

const {
  ListBenefitController,
  ActivateBenefitController,
  DeactivateBenefitController,
  CreateBenefitController,
  DeleteBenefitController,
} = benefitsControllers;

const benefitsRoutes = Router();

benefitsRoutes.get("/", new ListBenefitController().index);
benefitsRoutes.put("/:id/activate", new ActivateBenefitController().index);
benefitsRoutes.put("/:id/deactivate", new DeactivateBenefitController().index);
benefitsRoutes.post("/", new CreateBenefitController().index);
benefitsRoutes.delete("/", new DeleteBenefitController().index);

export { benefitsRoutes };
