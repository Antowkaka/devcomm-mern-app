import express from 'express';

import { errorHandlers } from '../controllers/errorHandlers.js';
import { RegisterUser, LoginUser } from '../controllers/user.js';

const router = express.Router();

router.post('/register', errorHandlers(RegisterUser))
router.post('/login', errorHandlers(LoginUser))


export default router;