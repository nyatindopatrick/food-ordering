import express from 'express';
import { createMenu } from '../controllers/menuController';
import { newMenu } from '../middlewares/validator';

const router = express.Router();

router.post('/', newMenu, createMenu);

export default router;
