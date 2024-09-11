import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getCurso, getCursos, createCruso } from "../controllers/curso.controller.js";

const router = Router();

router.get('/cursos', authRequired, getCursos)

router.get('/cursos/:id', authRequired, getCurso)

router.post('/cursos', authRequired, createCruso)

export default router;