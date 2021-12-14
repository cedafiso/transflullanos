const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdenDeServicioSchema = new Schema({
    cliente: String,
    origen: String,
    destino: String,
    createDate: Date,
});

const Orden = mongoose.model('Orden', OrdenDeServicioSchema);

module.exports = Orden;