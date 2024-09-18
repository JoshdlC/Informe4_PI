import Catedratico from "../models/catedratico.model.js";

export const getCatedraticos = async (req, res) => {
    const catedraticos = await Catedratico.find();
    res.json(catedraticos);
};

export const createCatedratico = async (req, res) => {
    const { nombre, apellido } = req.body;
    const newCatedratico = new Catedratico({
        nombre,
        apellido
    })
    const savedCatedratico = await newCatedratico.save();
    res.json(savedCatedratico);
};

export const getCatedratico = async (req, res) => {
    const catedratico = await Catedratico.findById(req.params.id);
    if(!catedratico) return res.status(404).json({message: 'Catedratico not found'});
    res.json(catedratico);
}