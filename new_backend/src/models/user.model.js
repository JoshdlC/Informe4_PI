import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    registro_academico: {
        type: String,
        required: true,
        trim: true,
    },
    nombres: {
        type: String,
        required: true,
        trim: true,
    },
    apellidos: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
})

export default mongoose.model('User', userSchema);