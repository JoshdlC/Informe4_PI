import app from './app.js';
import {connectDB} from './db.js';
import Curso from './models/curso.model.js';

const seedCursos = async () => {
        const defaultCursos = [
            {
                nombre: "Matemáticas Avanzadas",
                seccion: "A",
                catedratico: "Dr. Juan Pérez",
                creditos: "5",
                codigo: "MA101",
            },
            {
                nombre: "Programación en C++",
                seccion: "B",
                catedratico: "Ing. Carlos García",
                creditos: "5",
                codigo: "PC102",
            }
        ];

        for (const curso of defaultCursos) {
            // Verifica si el curso ya existe
            const cursoExistente = await Curso.findOne({
                nombre: curso.nombre,
                seccion: curso.seccion
            });
            
            if(!cursoExistente){
                try {
                    await Curso.insertMany(defaultCursos);  // Inserta los cursos
                    console.log('Cursos añadidos correctamente.');
                } catch (error) {
                    console.error('Error al insertar cursos:', error);
                }
            }else{
                console.log(`Curso "${curso.nombre}" sección "${curso.seccion}" ya existe.`);
            }
        }
};

connectDB();

// Llamar a la función `seedCursos` después de que la conexión esté establecida
import mongoose from 'mongoose';
mongoose.connection.once('open', async () => {
    console.log('Conexión con la base de datos establecida.');
    await seedCursos();  // Inicializar los cursos solo si no existen
});

app.listen(3000)
console.log('Server on port', 3000);