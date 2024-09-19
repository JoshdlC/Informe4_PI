import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getCatedratico, getCatedraticos, createCatedratico } from '../controllers/catedratico.controller.js';

const router = Router();

router.get('/catedraticos', authRequired, getCatedraticos)

router.get('/catedraticos/:id', authRequired, getCatedratico)

router.post('/catedraticos', authRequired, createCatedratico)

export default router;