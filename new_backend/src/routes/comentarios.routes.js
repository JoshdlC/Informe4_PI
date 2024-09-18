import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getComentarios, getComentario, createComentario } from "../controllers/comentario.controller.js";

const router = Router();

router.get('/comentarios', authRequired, getComentarios)

router.get('/comentarios/:id', authRequired, getComentario)

router.post('/comentarios', authRequired, createComentario)

export default router;