import Comentario from '../models/comentario.model.js';

export const getComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.find();
        res.json(comentarios);
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const createComentario = async (req, res) => {
    try {
        const { mensaje, date } = req.body;
        const newComentario = new Comentario({
            usuario: req.user.id,
            mensaje,
            date
        })
        const savedComentario = await newComentario.save();
        res.json(savedComentario);
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    } 
};

export const getComentario = async (req, res) => {
    try {
        const comentario = await Comentario.findById(req.params.id).populate('usuario');
        if(!comentario) return res.status(404).json({message: 'Comentario not found'});
        res.json(comentario);
    } catch (error) {
        return res.status(404).json({message: 'Comentario not found'});
    }
};