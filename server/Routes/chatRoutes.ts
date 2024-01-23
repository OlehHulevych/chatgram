import {Router} from 'express'
import { accessChat } from '../controllers/chatControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware)
router.post('/access', accessChat);

export default router