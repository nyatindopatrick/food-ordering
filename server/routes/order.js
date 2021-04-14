import express from 'express';
import { createOrder } from '../controllers/orderController';
import { newOrder } from '../middlewares/validator';

const router = express.Router();

router.post('/', newOrder, createOrder);

export default router;
