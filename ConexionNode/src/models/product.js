const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    descripcion: {
        type:String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required:true
    }

});

module.exports = mongoose.model('Product', productSchema);