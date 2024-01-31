import {Router} from 'express'
import { sendMessage, getMessage } from '../controllers/messageContollers';
import { authMiddleware } from '../middlewares/authMiddleware';


const router = Router();

router.use(authMiddleware)
router.post('/send', sendMessage);
router.get('/get/:id', getMessage);


export default router

