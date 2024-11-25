import app from './app.js';
import {connectDB} from './db.js';
import Curso from './models/curso.model.js';
import Catedratico from './models/catedratico.model.js';

const seedCursos = async () => {
        const defaultCursos = [
            {
                nombre: "Análisis y Diseño de Sistemas 1",
                seccion: "A",
                catedratico: "GUEVARA ORELLANA, WILLIAM SAMUEL",
                creditos: "6",
                codigo: "0283",
            },
            {
                nombre: "Análisis y Diseño de Sistemas 1",
                seccion: "B",
                catedratico: "RODAS ROBLEDO, EDGAR FRANCISCO",
                creditos: "6",
                codigo: "0283",
            },
            {
                nombre: "Análisis y Diseño de Sistemas 2",
                seccion: "A",
                catedratico: "ROJAS MORALES, CLAUDIA LICETH",
                creditos: "7",
                codigo: "0785",
            },
            {
                nombre: "Análisis y Diseño de Sistemas 2",
                seccion: "B",
                catedratico: "ALDANA LARRAZABAL, MIRNA IVONNE",
                creditos: "7",
                codigo: "0785",
            },
            {
                nombre: "Arquitectura de Computadoras y Ensambladores 1",
                seccion: "A",
                catedratico: "ESCOBAR LEIVA, OTTO RENE",
                creditos: "5",
                codigo: "0778",
            },
            {
                nombre: "Arquitectura de Computadoras y Ensambladores 1",
                seccion: "B",
                catedratico: "ESCOBAR LEIVA, OTTO RENE",
                creditos: "5",
                codigo: "0778",
            },
            {
                nombre: "Arquitectura de Computadoras y Ensambladores 2",
                seccion: "A",
                catedratico: "DÍAZ LÓPEZ, GABRIEL ALEJANDRO",
                creditos: "5",
                codigo: "0779",
            },
            {
                nombre: "Arquitectura de Computadoras y Ensambladores 2",
                seccion: "B",
                catedratico: "RAMIREZ RAMIREZ, JURGEN ANDONI",
                creditos: "5",
                codigo: "0779",
            },
            {
                nombre: "Bases de Datos 1",
                seccion: "B",
                catedratico: "ESPINO BARRIOS, LUIS FERNANDO",
                creditos: "6",
                codigo: "0774",
            },
            {
                nombre: "Bases de Datos 1",
                seccion: "N",
                catedratico: "LONGO MORALES, ALVARO GIOVANNI",
                creditos: "6",
                codigo: "0774",
            },
            {
                nombre: "Bases de Datos 2",
                seccion: "A",
                catedratico: "RODRIGUEZ ACOSTA, OTTO AMILCAR",
                creditos: "7",
                codigo: "0775",
            },
            {
                nombre: "Bases de Datos 2",
                seccion: "B",
                catedratico: "ARIAS, LUIS ALBERTO",
                creditos: "7",
                codigo: "0775",
            },
            {
                nombre: "Economía",
                seccion: "A+",
                catedratico: "RALDA RECINOS, ILEANA GUISELA",
                creditos: "3",
                codigo: "0014",
            },
            {
                nombre: "Economía",
                seccion: "A-",
                catedratico: "MORALES RUIZ, EVELYN CAROLINA",
                creditos: "3",
                codigo: "0014",
            },
            {
                nombre: "Estructura de Datos",
                seccion: "A",
                catedratico: "ORNELIS HOIL, EDGAR RENE",
                creditos: "6",
                codigo: "0772",
            },
            {
                nombre: "Estructura de Datos",
                seccion: "B",
                catedratico: "HERNANDEZ GARCIA, ALVARO OBRAYAN",
                creditos: "6",
                codigo: "0772",
            },
            {
                nombre: "Estructura de Datos",
                seccion: "C",
                catedratico: "ESPINO BARRIOS, LUIS FERNANDO",
                creditos: "6",
                codigo: "0772",
            },
            {
                nombre: "Gerenciales 2",
                seccion: "N",
                catedratico: "BAUTISTA FUENTES, MARIO JOSE",
                creditos: "6",
                codigo: "0786",
            },
            {
                nombre: "Gerenciales 2",
                seccion: "N-",
                catedratico: "LUIS ALBERTO, VETTORAZZI ESPANA",
                creditos: "6",
                codigo: "0786",
            },
            {
                nombre: "Inteligencia Artificial 1",
                seccion: "A",
                catedratico: "ESPINO BARRIOS, LUIS FERNANDO",
                creditos: "7",
                codigo: "0972",
            },
            {
                nombre: "Introducción a la Programación y Computación 1",
                seccion: "A",
                catedratico: "DÍAZ LÓPEZ, GABRIEL ALEJANDRO",
                creditos: "6",
                codigo: "0770",
            },
            {
                nombre: "Introducción a la Programación y Computación 1",
                seccion: "B",
                catedratico: "ESCOBAR ARGUETA, WILLIAM ESTUARDO",
                creditos: "6",
                codigo: "0770",
            },
            {
                nombre: "Introducción a la Programación y Computación 1",
                seccion: "D",
                catedratico: "VELIZ LINARES, HERMAN IGOR",
                creditos: "6",
                codigo: "0770",
            },
            {
                nombre: "Introducción a la Programación y Computación 1",
                seccion: "E",
                catedratico: "CALDERON MENDEZ, NEFTALI DE JESUS",
                creditos: "6",
                codigo: "0770",
            },
            {
                nombre: "Introducción a la Programación y Computación 1",
                seccion: "G",
                catedratico: "RODAS ROBLEDO, EDGAR FRANCISCO",
                creditos: "6",
                codigo: "0770",
            },
            {
                nombre: "Introducción a la Programación y Computación 2",
                seccion: "A",
                catedratico: "PÉREZ TÜRK, MARLON ANTONIO",
                creditos: "6",
                codigo: "0771",
            },
            {
                nombre: "Introducción a la Programación y Computación 2",
                seccion: "B",
                catedratico: "ROJAS MORALES, CLAUDIA LICETH",
                creditos: "6",
                codigo: "0771",
            },
            {
                nombre: "Introducción a la Programación y Computación 2",
                seccion: "C",
                catedratico: "RUIZ JUAREZ, JOSE MANUEL",
                creditos: "6",
                codigo: "0771",
            },
            {
                nombre: "Introducción a la Programación y Computación 2",
                seccion: "D",
                catedratico: "BARRIOS, STANLY",
                creditos: "6",
                codigo: "0771",
            },
            {
                nombre: "Introducción a la Programación y Computación 2",
                seccion: "N",
                catedratico: "ZAPETA GÓMEZ, EDWIN ESTUARDO",
                creditos: "6",
                codigo: "0771",
            },
            {
                nombre: "Introducción a la Programación y Computación 2",
                seccion: "P",
                catedratico: "PAZ GONZÁLEZ, FERNANDO JOSÉ",
                creditos: "6",
                codigo: "0771",
            },
            {
                nombre: "Lenguajes Formales y de Programación",
                seccion: "A+",
                catedratico: "RODRIGUEZ ACOSTA, OTTO AMILCAR",
                creditos: "4",
                codigo: "0796",
            },
            {
                nombre: "Lenguajes Formales y de Programación",
                seccion: "A-",
                catedratico: "CAMPOS DE LÓPEZ, DAMARIS",
                creditos: "4",
                codigo: "0796",
            },
            {
                nombre: "Lenguajes Formales y de Programación",
                seccion: "B+",
                catedratico: "Morales, David Estuardo",
                creditos: "4",
                codigo: "0796",
            },
            {
                nombre: "Logica de Sistemas",
                seccion: "B",
                catedratico: "AVILA PESQUERA DE MEDINILLA, FLORIZA FELIPA",
                creditos: "3",
                codigo: "0795",
            },
            {
                nombre: "Logica de Sistemas",
                seccion: "C",
                catedratico: "AVILA PESQUERA DE MEDINILLA, FLORIZA FELIPA",
                creditos: "3",
                codigo: "0795",
            },
            {
                nombre: "Manejo e Implementacion de Archivos",
                seccion: "B",
                catedratico: "ESCOBAR ARGUETA, WILLIAM ESTUARDO",
                creditos: "5",
                codigo: "0773",
            },
            {
                nombre: "Manejo e Implementacion de Archivos",
                seccion: "C",
                catedratico: "PAZ CAMPOS, OSCAR ALEJANDRO",
                creditos: "5",
                codigo: "0773",
            },
            {
                nombre: "Manejo e Implementacion de Archivos",
                seccion: "D",
                catedratico: "RAMIREZ RAMIREZ, JURGEN ANDONI",
                creditos: "5",
                codigo: "0773",
            },
            {
                nombre: "Modelación y Simulación 1",
                seccion: "A",
                catedratico: "FERNANDEZ CACERES, CESAR AUGUSTO",
                creditos: "5",
                codigo: "0729",
            },
            {
                nombre: "Modelación y Simulación 2",
                seccion: "A",
                catedratico: "CANCINOS RENDON, MIGUEL ANGEL",
                creditos: "6",
                codigo: "0720",
            },
            {
                nombre: "Modelación y Simulación 2",
                seccion: "B",
                catedratico: "FERNANDEZ CACERES, CESAR AUGUSTO",
                creditos: "6",
                codigo: "0720",
            },
            {
                nombre: "Organización Computacional",
                seccion: "A",
                catedratico: "ESCOBAR LEIVA, OTTO RENE",
                creditos: "4",
                codigo: "0964",
            },
            {
                nombre: "Organización Computacional",
                seccion: "B",
                catedratico: "ESCOBAR LEIVA, OTTO RENE",
                creditos: "4",
                codigo: "0964",
            },
            {
                nombre: "Organización Computacional",
                seccion: "C",
                catedratico: "PAZ GONZÁLEZ, FERNANDO JOSÉ",
                creditos: "4",
                codigo: "0964",
            },
            {
                nombre: "Organización de Lenguajes y Compiladores 2",
                seccion: "A",
                catedratico: "LOPEZ LOPEZ, BAYRON WOSVELY",
                creditos: "6",
                codigo: "0781",
            },
            {
                nombre: "Organización de Lenguajes y Compiladores 2",
                seccion: "N",
                catedratico: "SABAN RAXON, EDGAR RUBEN",
                creditos: "6",
                codigo: "0781",
            },
            {
                nombre: "Organización de Lenguajes y Compiladores 2",
                seccion: "B",
                catedratico: "ESPINO BARRIOS, LUIS FERNANDO",
                creditos: "6",
                codigo: "0781",
            },
            {
                nombre: "Organización de Lenguajes y Compiladores 1",
                seccion: "C",
                catedratico: "Lajpop Ajpacajá, Kevin Adiel",
                creditos: "6",
                codigo: "0777",
            },
            {
                nombre: "Organización de Lenguajes y Compiladores 1",
                seccion: "N",
                catedratico: "BAUTISTA FUENTES, MARIO JOSE",
                creditos: "6",
                codigo: "0777",
            },
            {
                nombre: "Programación Comercial 1",
                seccion: "A",
                catedratico: "MENENDEZ PEREZ, GUIPPSY JEANNIRA",
                creditos: "4",
                codigo: "0667",
            },
            {
                nombre: "Programación Comercial 1",
                seccion: "P",
                catedratico: "VELIZ LINARES, HERMAN IGOR",
                creditos: "4",
                codigo: "0667",
            },
            {
                nombre: "Programación Comercial 1",
                seccion: "Q",
                catedratico: "ESCOBAR ARGUETA, WILLIAM ESTUARDO",
                creditos: "4",
                codigo: "0667",
            },
            {
                nombre: "Programación de Computadoras 1",
                seccion: "A",
                catedratico: "VELIZ LINARES, HERMAN IGOR",
                creditos: "5",
                codigo: "0090",
            },
            {
                nombre: "Programación de Computadoras 1",
                seccion: "P",
                catedratico: "RAMIREZ RAMIREZ, JURGEN ANDONI",
                creditos: "5",
                codigo: "0090",
            },
            {
                nombre: "Programación de Computadoras 2",
                seccion: "N",
                catedratico: "VELIZ LINARES, HERMAN IGOR",
                creditos: "5",
                codigo: "0092",
            },
            {
                nombre: "Programación de Computadoras 2",
                seccion: "P",
                catedratico: "VELIZ LINARES, HERMAN IGOR",
                creditos: "5",
                codigo: "0092",
            },
            {
                nombre: "Programación de Computadoras 2",
                seccion: "R",
                catedratico: "ESCOBAR ARGUETA, WILLIAM ESTUARDO",
                creditos: "5",
                codigo: "0092",
            },
            {
                nombre: "Redes de Computadoras 1",
                seccion: "A",
                catedratico: "ESPINO BARRIOS, LUIS FERNANDO",
                creditos: "5",
                codigo: "0970",
            },
            {
                nombre: "Redes de Computadoras 1",
                seccion: "N",
                catedratico: "HERNANDEZ RAMIREZ, PEDRO PABLO",
                creditos: "5",
                codigo: "0970",
            },
            {
                nombre: "Redes de Computadoras 2",
                seccion: "N",
                catedratico: "MORATAYA, ALLAN ALBERTO",
                creditos: "6",
                codigo: "0975",
            },
            {
                nombre: "Seminario de Sistemas 1",
                seccion: "A",
                catedratico: "LOPEZ FERNANDEZ, MANUEL FERNANDO",
                creditos: "5",
                codigo: "0797",
            },
            {
                nombre: "Seminario de Sistemas 1",
                seccion: "B",
                catedratico: "ALTAN SAC , LUDWING FEDERICO",
                creditos: "5",
                codigo: "0797",
            },
            {
                nombre: "Seminario de Sistemas 2",
                seccion: "A",
                catedratico: "VETTORAZZI ESPANA, LUIS ALBERTO",
                creditos: "5",
                codigo: "0798",
            },
            {
                nombre: "Seminario de Sistemas 2",
                seccion: "N",
                catedratico: "PAZ GONZÁLEZ, FERNANDO JOSÉ",
                creditos: "5",
                codigo: "0798",
            },
            {
                nombre: "Sistemas Operativos 1",
                seccion: "A",
                catedratico: "Guzmán Polanco, Jesús Alberto",
                creditos: "6",
                codigo: "0281",
            },
            {
                nombre: "Sistemas Operativos 2",
                seccion: "A",
                catedratico: "ORNELIS HOIL, EDGAR RENE",
                creditos: "4",
                codigo: "0285",
            },
            {
                nombre: "Sistemas Organizaciones y Gerenciales 1",
                seccion: "A",
                catedratico: "PAZ GONZÁLEZ, FERNANDO JOSÉ",
                creditos: "5",
                codigo: "0786",
            },
            {
                nombre: "Sistemas Organizaciones y Gerenciales 1",
                seccion: "N",
                catedratico: "ZAPETA GÓMEZ, EDWIN ESTUARDO",
                creditos: "5",
                codigo: "0786",
            },
            {
                nombre: "Software Avanzado",
                seccion: "A",
                catedratico: "MEDINILLA RODRIGUEZ, EVEREST DARWIN",
                creditos: "8",
                codigo: "0780",
            },
            {
                nombre: "Software Avanzado",
                seccion: "B",
                catedratico: "Aldana Prillwitz, Marco Tulio",
                creditos: "8",
                codigo: "0780",
            },
            {
                nombre: "Teoria de Sistemas 1",
                seccion: "A",
                catedratico: "ALVAREZ MEJIA, JORGE LUIS",
                creditos: "4",
                codigo: "0722",
            },
            {
                nombre: "Teoria de Sistemas 2",
                seccion: "A",
                catedratico: "ALVAREZ MEJIA, JORGE LUIS",
                creditos: "4",
                codigo: "0724",
            },
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

const seedCatedraticos = async () => {
    const defaultCatedraticos = [
        {
            nombre: "WIILLIAM SAMUEL",
            apellido: "GUEVARA ORELLANA",
        },
        {
            nombre: "EDGAR FRANCISCO",
            apellido: "RODAS ROBLEDO",
        },
        {
            nombre: "CLAUDIA LICETH",
            apellido: "ROJAS MORALES",
        },
        {
            nombre: "MIRNA IVONNE",
            apellido: "ALDANA LARRAZABAL",
        },
        {
            nombre: "OTTO RENE",
            apellido: "ESCOBAR LEIVA",
        },
        {
            nombre: "GABRIEL ALEJANDRO",
            apellido: "DÍAZ LÓPEZ",
        },
        {
            nombre: "JURGEN ANDONI",
            apellido: "RAMIREZ RAMIREZ",
        },
        {
            nombre: "LUIS FERNANDO",
            apellido: "ESPINO BARRIOS",
        },
        {
            nombre: "ALVARO GIOVANNI",
            apellido: "LONGO MORALES",
        },
        {
            nombre: "OTTO AMILCAR",
            apellido: "RODRIGUEZ ACOSTA",
        },
        {
            nombre: "LUIS ALBERTO",
            apellido: "ARIAS",
        },
        {
            nombre: "ILEANA GUISELA",
            apellido: "RALDA RECINOS",
        },
        {
            nombre: "EVELYN CAROLINA",
            apellido: "MORALES RUIZ",
        },
        {
            nombre: "EDGAR RENE",
            apellido: "ORNELIS HOIL",
        },
        {
            nombre: "ALVARO OBRAYAN",
            apellido: "HERNANDEZ GARCIA",
        },
        {
            nombre: "MARIO JOSE",
            apellido: "BAUTISTA FUENTES",
        },
        {
            nombre: "WILLIAM ESTUARDO",
            apellido: "ESCOBAR ARGUETA",
        },
        {
            nombre: "MOISES EDUARDO",
            apellido: "VELASQUEZ OLIVA",
        },
        {
            nombre: "HERMAN IGOR",
            apellido: "VELIZ LINARES",
        },
        {
            nombre: "NEFTALI DE JESUS",
            apellido: "CALDERON MENDEZ",
        },
        {
            nombre: "MARLON ANTONIO",
            apellido: "PÉREZ TÜRK",
        },
        {
            nombre: "JOSE MANUEL",
            apellido: "RUIZ JUAREZ",
        },
        {
            nombre: "STANLY",
            apellido: "BARRIOS",
        },
        {
            nombre: "EDWIN ESTUARDO",
            apellido: "ZAPETA GÓMEZ",
        },
        {
            nombre: "FERNANDO JOSÉ",
            apellido: "GONZÁLEZ PAZ",
        },
        {
            nombre: "DAMARIS",
            apellido: "CAMPOS DE LÓPEZ",
        },
        {
            nombre: "DAVID ESTUARDO",
            apellido: "Morales",
        },
        {
            nombre: "ZULMA KARINA",
            apellido: "AGUIRRE ORDONEZ",
        },
        {
            nombre: "VIRGINIA VICTORIA",
            apellido: "TALA AYERDI",
        },
        {
            nombre: "FLORIZA FELIPA",
            apellido: "AVILA PESQUERA DE MEDINILLA",
        },
        {
            nombre: "JUAN ALVARO",
            apellido: "DIAZ ARDAVIN",
        },
        {
            nombre: "OSCAR ALEJANDRO",
            apellido: "PAZ CAMPOS",
        },
        {
            nombre: "CESAR AUGUSTO",
            apellido: "FERNANDEZ CACERES",
        },
        {
            nombre: "MIGUEL ANGEL",
            apellido: "CANCINOS RENDON",
        },
        {
            nombre: "BAYRON WOSVELY",
            apellido: "LOPEZ LOPEZ",
        },
        {
            nombre: "EDGAR RUBEN",
            apellido: "SABAN RAXON",
        },
        {
            nombre: "MANUEK HAROLDO",
            apellido: "CASTILLO REYNA",
        },
        {
            nombre: "KEVIN ADIEL",
            apellido: "LAJPOP AJPACAJA",
        },
        {
            nombre: "MARIO JOSE",
            apellido: "BAUTISTA FUENTES",
        },
        {
            nombre: "GUIPPSY JEANNIRA",
            apellido: "MENENDEZ PEREZ",
        },
        {
            nombre: "JOSE ANIBAL",
            apellido: "SILVA DE LOS ANGELES",
        },
        {
            nombre: "PEDRO PABLO",
            apellido: "HERNANDEZ RAMIREZ",
        },
        {
            nombre: "ALLAN ALBERTO",
            apellido: "MORATAYA",
        },
        {
            nombre: "LUDWING FEDERICO",
            apellido: "ALTAN SAC",
        },
        {
            nombre: "LUIS ALBERTO",
            apellido: "VETTORAZZI ESPANA",
        },
        {
            nombre: "JESUS ALBERTO",
            apellido: "GUZMAN POLANCO",
        },
        {
            nombre: "EDWIN ESTUARDO",
            apellido: "ZAPETA GOMEZ",
        },
        {
            nombre: "EVEREST DARWIN",
            apellido: "MEDINILLA RODRIGUEZ",
        },
        {
            nombre: "MARCO TULIO",
            apellido: "ALDANA PRILLWITZ",
        },
        {
            nombre: "JORGE LUIS",
            apellido: "ALVAREZ MEJIA",
        },
    ];

    for (const catedratico of defaultCatedraticos) {
        // Verifica si el curso ya existe
        const catedraticoExistente = await Catedratico.findOne({
            nombre: catedratico.nombre,
            apellido: catedratico.apellido
        });
        
        if(!catedraticoExistente){
            try {
                await Catedratico.insertMany(defaultCatedraticos);  // Inserta los cursos
                console.log('Catedraticos añadidos correctamente.');
            } catch (error) {
                console.error('Error al insertar catedraticos:', error);
            }
        }else{
            console.log(`Nombre "${catedratico.nombre}" Apellido "${catedratico.apellido}" ya existe.`);
        }
    }
};

connectDB();

// Llamar a la función `seedCursos` después de que la conexión esté establecida
import mongoose from 'mongoose';
mongoose.connection.once('open', async () => {
    console.log('Conexión con la base de datos establecida.');
    await seedCursos();  // Inicializar los cursos solo si no existen
    await seedCatedraticos();  // Inicializar los catedraticos solo si no existen
});

app.listen(3000)
console.log('Server on port', 3000);