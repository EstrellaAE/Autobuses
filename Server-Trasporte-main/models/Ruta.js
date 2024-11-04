const mongoose = require('mongoose');

const CoordenadaSchema = mongoose.Schema({
    lat: {
        type: Number,
        required: true  // Latitud es obligatoria
    },
    lng: {
        type: Number,
        required: true  // Longitud es obligatoria
    }
});

const RutaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    coordenadas: [CoordenadaSchema]  // Usa el esquema CoordenadaSchema para la propiedad coordenadas
});

module.exports = mongoose.model('Ruta', RutaSchema);
