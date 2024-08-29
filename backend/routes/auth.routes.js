const express = require('express');
const AppData = require('../AppData');

const router = express.Router();

// !Logear Usuario
router.post('/login', (req, res) => {
    const {nombre} = req.body;
    const {contrasenia} = req.body;

    //console.log(nombre, contrasenia)

    for (let usuario of AppData.usuarios) {
        if (usuario.nombre === nombre && usuario.contrasenia === contrasenia) {
            return res.status(200).json({ usuario })
        }
    }

    return res.status(400).json({
        error: 'Datos erroneos.'
    })

})

module.exports = router;