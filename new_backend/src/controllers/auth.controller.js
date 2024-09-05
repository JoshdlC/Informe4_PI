import User from '../models/user.model.js'

export const register = async(req, res) => {
    const { registro_academico, nombres, apellidos, password, correo } = req.body;
    
    try {
        const newUser = new User({
            registro_academico,
            nombres,
            apellidos,
            password,
            correo,
        });
    
        const userSaved = await newUser.save();
        res.json(userSaved)
    } catch (error) {
        console.log(error)
    }
};

export const login = (req, res) => res.send('login')