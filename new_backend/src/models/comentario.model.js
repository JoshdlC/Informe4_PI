import mongoose from "mongoose";

const comentarioSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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

export default mongoose.model('Comentario', comentarioSchema);