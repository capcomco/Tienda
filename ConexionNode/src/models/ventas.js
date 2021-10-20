const mongoose = require("mongoose");

const ventasSchema = mongoose.Schema({
    idVenta: {
        type: Number,
        require: true
    },
    descripcion: {
        type: String,
    },
    idCliente: {
        type: Number,
        require: true
    },
    cliente: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Ventas', ventasSchema);