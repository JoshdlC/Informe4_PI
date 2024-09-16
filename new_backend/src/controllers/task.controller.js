import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const createTask = async (req, res) => {
    try {
        const { usuario, curso, mensaje, date } = req.body;
        const newTask = new Task({
            usuario: req.user.id,
            curso,
            mensaje,
            date
        })
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
    
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('usuario');
        if(!task) return res.status(404).json({message: 'Task not found'});
        res.json(task);
    } catch (error) {
        return res.status(404).json({message: 'Task not found'});
    }
    
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, request.body, {
            new: true
        });
        if(!task) return res.status(404).json({message: 'Task not found'});
        res.json(task);
    } catch (error) {
        return res.status(404).json({message: 'Task not found'});
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({message: 'Task not found'});
        return res.json(204)
    } catch (error) {
        return res.status(404).json({message: 'Task not found'});
    };
};