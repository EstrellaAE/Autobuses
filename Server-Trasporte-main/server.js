/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: err.message
    });
});

// Conexión a MongoDB con manejo de errores
mongoose.connect('mongodb://localhost:27017/rutasDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Esquema de Ruta mejorado con validación
const rutaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        minlength: [3, 'El nombre debe tener al menos 3 caracteres']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true
    },
    horario: {
        type: String,
        required: [true, 'El horario es obligatorio'],
        validate: {
            validator: function(v) {
                return /^([01]?[0-9]|2[0-3]):[0-5][0-9]-([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
            },
            message: 'El horario debe tener el formato HH:MM-HH:MM'
        }
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    activa: {
        type: Boolean,
        default: true
    }
});

const Ruta = mongoose.model('Ruta', rutaSchema);

// Middleware para validar ID de ruta
const validarRutaId = async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'ID de ruta inválido' });
    }
    next();
};

// Rutas
app.get('/rutas', async (req, res) => {
    try {
        const { activa, ordenar } = req.query;
        let query = {};
        
        // Filtrar por rutas activas/inactivas
        if (activa !== undefined) {
            query.activa = activa === 'true';
        }

        let rutas = Ruta.find(query);

        // Ordenar resultados
        if (ordenar) {
            rutas = rutas.sort({ [ordenar]: 1 });
        }

        const resultado = await rutas.exec();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener rutas', message: error.message });
    }
});

app.get('/rutas/:id', validarRutaId, async (req, res) => {
    try {
        const ruta = await Ruta.findById(req.params.id);
        if (!ruta) {
            return res.status(404).json({ error: 'Ruta no encontrada' });
        }
        res.json(ruta);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la ruta', message: error.message });
    }
});

app.post('/rutas', async (req, res) => {
    try {
        const nuevaRuta = new Ruta(req.body);
        await nuevaRuta.save();
        res.status(201).json(nuevaRuta);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Error de validación', message: error.message });
        }
        res.status(500).json({ error: 'Error al crear la ruta', message: error.message });
    }
});

app.put('/rutas/:id', validarRutaId, async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!ruta) {
            return res.status(404).json({ error: 'Ruta no encontrada' });
        }
        res.json(ruta);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Error de validación', message: error.message });
        }
        res.status(500).json({ error: 'Error al actualizar la ruta', message: error.message });
    }
});

app.delete('/rutas/:id', validarRutaId, async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndDelete(req.params.id);
        if (!ruta) {
            return res.status(404).json({ error: 'Ruta no encontrada' });
        }
        res.json({ message: 'Ruta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la ruta', message: error.message });
    }
});

// Ruta para desactivar una ruta en lugar de eliminarla
app.patch('/rutas/:id/desactivar', validarRutaId, async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndUpdate(
            req.params.id,
            { activa: false },
            { new: true }
        );
        if (!ruta) {
            return res.status(404).json({ error: 'Ruta no encontrada' });
        }
        res.json(ruta);
    } catch (error) {
        res.status(500).json({ error: 'Error al desactivar la ruta', message: error.message });
    }
});

// Ruta para activar una ruta en lugar de eliminarla
app.patch('/rutas/:id/activar', validarRutaId, async (req, res) => {
    try {
        const ruta = await Ruta.findByIdAndUpdate(
            req.params.id,
            { activa: true },
            { new: true }  
        );
        if (!ruta) {
            return res.status(404).json({ error: 'Ruta no encontrada' });
        }
        res.json(ruta);
    } catch (error) {
        res.status(500).json({ error: 'Error al activar la ruta', message: error.message });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); */