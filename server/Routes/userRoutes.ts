import { Router } from "express";
import { registerUserController, loginController, controllerGetUserInformation } from "../controllers/userControllers";

const router = Router();

router.post('/register', registerUserController );
router.post('/login', loginController);
router.post('/getInfo', controllerGetUserInformation)

export default router;