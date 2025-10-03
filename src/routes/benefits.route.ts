import { benefitsControllers } from "@controllers/index.controllers";
import { SequelizeRepositoryProvider } from "@providers/repository.provider";
import { Router } from "@providers/router.provider";
import { Benefit } from "models/benefit.model";
import { BenefitService } from "services/benefit.service";
import { bind } from "@helpers/bind.helper";
const {
  ListBenefitController,
  ActivateBenefitController,
  DeactivateBenefitController,
  CreateBenefitController,
  DeleteBenefitController,
} = benefitsControllers;

const benefitsRoutes = Router();
const repository = new SequelizeRepositoryProvider(Benefit);
const service = new BenefitService(repository);

const list = bind(new ListBenefitController(service));
const activate = bind(new ActivateBenefitController(service));
const deactivate = bind(new DeactivateBenefitController(service));
const create = bind(new CreateBenefitController(service));
const remove = bind(new DeleteBenefitController(service));

benefitsRoutes.get("/", list);
benefitsRoutes.put("/:id/activate", activate);
benefitsRoutes.put("/:id/deactivate", deactivate);
benefitsRoutes.post("/", create);
benefitsRoutes.delete("/:id", remove);

export { benefitsRoutes };
