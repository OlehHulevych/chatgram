import Router from 'express'
import { sendMessage, getMessage, UserRequest } from '../controllers/messageContollers';
import { authMiddleware } from '../middlewares/authMiddleware';


const router = Router();

router.use(authMiddleware)
router.get('/get/:id', getMessage );
router.post('/send', sendMessage);

export default router

