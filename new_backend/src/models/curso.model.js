import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    seccion:{
        type: String,
        required: true,
    },
    catedratico: { 
        type: String,
        required: true,
    },
    creditos: { 
        type: String,
        required: true,
    },
    codigo: { 
        type: String,
        required: true,
    },
});

export default mongoose.model('Curso', cursoSchema);