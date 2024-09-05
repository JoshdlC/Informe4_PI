import mongoose from "mongoose";

mongoose.Schema({
    registro_academico: {
        type: String,
    },
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    password: {
        type: String,
    },
    correo: {
        type: String,
    },
})