import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';

export const register = async(req, res) => {
    const { registro_academico, nombres, apellidos, password, correo } = req.body;
    
    try {

        const userFound = await User.findOne({registro_academico})
        if (userFound) return res.status(400).json({message: ["El registro academico ya existe"],});

        const userFoundEmail = await User.findOne({correo})
        if (userFoundEmail) return res.status(400).json({message: ["El correo ya existe"],});

        const  passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            registro_academico,
            nombres,
            apellidos,
            password: passwordHash,
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
        if (!userFound) return res.status(400).json({message: "User not found"});

        const  isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({message: "Incorrect password"});
    
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