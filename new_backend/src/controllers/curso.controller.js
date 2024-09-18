import Curso from '../models/curso.model.js';

export const getCursos = async (req, res) => {
    const cursos = await Curso.find();
    res.json(cursos);
};

export const createCruso = async (req, res) => {
    const { nombre, seccion, catedratico, creditos, codigo } = req.body;
    const newTask = new Task({
        nombre,
        seccion,
        catedratico,
        creditos,
        codigo
    })
    const savedCurso = await newTask.save();
    res.json(savedCurso);
};

export const getCurso = async (req, res) => {
    const curso = await Task.findById(req.params.id);
    if(!curso) return res.status(404).json({message: 'Curso not found'});
    res.json(curso);
};
