import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';

export const register = async(req, res) => {
    const { registro_academico, nombres, apellidos, password, correo } = req.body;
    
    try {

        const userFound = await User.findOne({registro_academico})
        if (userFound) return res.status(400).json(["El registro academico ya existe"]);

        const userFoundEmail = await User.findOne({correo})
        if (userFoundEmail) return res.status(400).json(["El correo ya existe"]);

        const  passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            registro_academico,
            nombres,
            apellidos,
            password,
            correo,
        });
    
        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id})
        res.cookie('token', token )
        res.json({
            id: userSaved._id,
            registro_academico: userSaved.registro_academico,
            nombres: userSaved.nombres,
            apellidos: userSaved.apellidos,
            correo: userSaved.correo
        });
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

export const login = async(req, res) => {
    const { registro_academico, password} = req.body;
    
    try {

        const userFound = await User.findOne({registro_academico})
        if (!userFound) return res.status(400).json({message: "Registro academico no registrado"});

        if (password !== userFound.password) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        // const  isMatch = await bcrypt.compare(password, userFound.password)
        // if(!isMatch) return res.status(400).json({message: "Incorrect password"});
    
        const token = await createAccessToken({id: userFound._id});
        
        res.cookie('token', token )
        res.json({
            id: userFound._id,
            registro_academico: userFound.registro_academico,
            nombres: userFound.nombres,
            apellidos: userFound.apellidos,
            correo: userFound.correo
        });
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message:"User not found"});

    return res.json({
        id: userFound._id,
        registro_academico: userFound.registro_academico,
        nombres: userFound.nombres,
        apellidos: userFound.apellidos,
        correo: userFound.correo,
    })
    res.send('profile')
};

export const verifyToken = async (req, res) => {
    const {token} = req.cookies;

    if(!token) return res.status(401).json({message: "Acceso no autorizado"});

    jwt.verify(token, TOKEN_SECRET, async  (err, user) => {
        if(err) return res.status(401).json({message: "Acceso no autorizado"});
        
        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(400).json({message: "User not found"});
        
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });
    });

};

export const updateProfile = async (req, res) => {
    const { nombres, apellidos, correo, password } = req.body; //* Obtiene los datos del cuerpo de la solicitud

    try {
        //* Buscar el usuario por ID
        const userFound = await User.findById(req.user.id);
        if (!userFound) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        //* Si se proporciona una nueva contraseña, hashéala
        if (password) {
            const passwordHash = await bcrypt.hash(password, 10);
            userFound.password = passwordHash; //* Actualiza la contraseña en el objeto del usuario
        }

        //* Actualiza los demás campos
        userFound.nombres = nombres || userFound.nombres; //* Mantiene el valor actual si no se proporciona un nuevo valor
        userFound.apellidos = apellidos || userFound.apellidos;
        userFound.correo = correo || userFound.correo;

        //* Guarda el usuario actualizado
        const updatedUser = await userFound.save(); //* Guardar el documento actualizado

        return res.json({
            id: updatedUser._id,
            registro_academico: updatedUser.registro_academico,
            nombres: updatedUser.nombres,
            apellidos: updatedUser.apellidos,
            correo: updatedUser.correo,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};