import { Router } from "express";
import { registerUserController, loginController, controllerGetUserInformation, findUserController } from "../controllers/userControllers";

const router = Router();

router.post('/register', registerUserController );
router.post('/login', loginController);
router.post('/getInfo', controllerGetUserInformation)
router.get('/searchUser?search', findUserController)

export default router;