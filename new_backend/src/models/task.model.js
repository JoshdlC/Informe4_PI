import mongoose, { Cursor } from "mongoose";

new mongoose.Schema({
    ususario: {
        type: String,
        required: true,
    },
    curso:{
        type: String,
        required: true,
    },
    mensaje: { 
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})