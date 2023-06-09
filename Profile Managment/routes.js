import userRouter from './user/index';

import express from 'express';
const router = express.Router();

router.use('/user', userRouter);

export default router;
