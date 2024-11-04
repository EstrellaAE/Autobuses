const Ruta = require("../models/Ruta");



// Trae lista de rutas de la BD
exports.obtenerRutas = async (req, res) => {
    try {
        
        const ruta = await Ruta.find();
        res.json(ruta)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}




