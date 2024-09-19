import mongoose from "mongoose";

const catedraticoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
});

export default mongoose.model('Catedratico', catedraticoSchema);