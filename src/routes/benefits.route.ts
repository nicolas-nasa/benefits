import {
  CreateBenefitController,
  ActivateBenefitController,
  DeactivateBenefitController,
  ListBenefitController,
  DeleteBenefitController,
} from "@controllers/benefits/index-benefit.controllers";
import { router } from "@providers/router/index.router";

router.get("/", new ListBenefitController());
router.put("/:id/activate", new ActivateBenefitController());
router.put("/:id/deactivate", new DeactivateBenefitController());
router.post("/", new CreateBenefitController());
router.delete("/", new DeleteBenefitController());

export { router as benefitsRouter };
