import express from 'express';
import { createMenu, listMenus } from '../controllers/menuController';
import { newMenu } from '../middlewares/validator';

const router = express.Router();

router.post('/', newMenu, createMenu);

router.get('/', listMenus);

export default router;
