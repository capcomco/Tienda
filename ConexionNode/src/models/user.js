const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type:String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    clave: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('User', userSchema);