import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    usuario: {
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
    },
}, {
    timestamps: true
});

export default mongoose.model('Task', taskSchema);