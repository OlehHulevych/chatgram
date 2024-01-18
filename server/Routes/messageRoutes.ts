import Router from 'express'
import { sendMessage, getMessage } from '../controllers/messageContollers';

const router = Router();

router.get('/get/:id', getMessage );
router.post('/send')