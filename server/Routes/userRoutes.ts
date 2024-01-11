import { Router } from "express";
import { registerUserController, loginController } from "../controllers/userControllers";

const router = Router();

router.post('/register', registerUserController );
router.post('/login', loginController);

export default router;