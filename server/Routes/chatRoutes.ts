import {Router} from 'express'
import { accessChat, fetchChats } from '../controllers/chatControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware)
router.post('/access', accessChat);
router.post('/get', fetchChats)

export default router