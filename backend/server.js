const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
//const fileUpload = require('express.fileupload');

//variable
const app = express()
app.use(cors())
//*base de datos
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'password', 
    database: 'world'
})

//*middlewares
app.use(express.json());
// Middleware para habilitar CORS
//app.use(cors(corsOptions));
// Middleware bodyParser permite leer los datos que vienen en el body de las peticiones
app.use(bodyParser.json({limit: '10mb', extended:true})); // para peticiones application/json
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}))

// app.use(fileUpload({
//   useTempFiles: true,
//   tempFileDir: '/temp/'
// }))

//!rutas
app.get('/', async (_, res) => {
  return res.status(200).json({ message: 'Informe 4 - Practicas iniciales' })
})

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users'
    db.query(sql, (err, result) => {
        if (err) {
        return res.status(500).json({ message: err })
        }
        return res.json(result)
    })
})

app.use('/auth/', require('./routes/auth.routes.js'));
//app.use('/usuario', require('./routes'))

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}.`);
})


//! Step 3: correr el server en la carpeta backend con npm start