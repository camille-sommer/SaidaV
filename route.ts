import { Router } from "express";
//? Controllers
import { UserController } from "./controllers/UserController";
import { ProductsController } from "./controllers/ProductsController";
import { SizesController } from "./controllers/SizesController";
import { CategoriesController } from "./controllers/CategoriesController";
import { OrderController } from "./controllers/OrderController";
//? MiddleWares
import { ensureAuthenticated } from "./middleWare/ensureAuthenticated";
import { getUserPermission } from "./middleWare/getUserPermission";
const router = Router();
//? User
router.post("/register", new UserController().create);
router.post("/authenticate", new UserController().authenticate);
router.put(
"/user/update",
ensureAuthenticated,
getUserPermission,
new UserController().update
);
router.get(
"/users",
ensureAuthenticated,
getUserPermission,
new UserController().listAll
);
//? Order
router.get(
"/orders",
ensureAuthenticated,
getUserPermission,
new OrderController().listAll
);
router.delete(
"/orders/delete",
ensureAuthenticated,
new OrderController().getActive
);
router.get(
"/orders/active",
ensureAuthenticated,
new OrderController().getActive
);
router.put(
"/orders/active",
ensureAuthenticated,
getUserPermission,
new OrderController().update
);
router.delete(
"/orders/active",
ensureAuthenticated,
getUserPermission,
new OrderController().delete
);
router.post(
"/orders",
ensureAuthenticated,
getUserPermission,
new OrderController().create
);
router.patch(
"/orders/conclude",
ensureAuthenticated,
getUserPermission,
new OrderController().conclude
);

