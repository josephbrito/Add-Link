const mongoose = require('mongoose');
const { Schema } = mongoose;

const linkSchema = new Schema({
    title:{ type:String, required: true },
    description: String,
    url:{ type:String, required: true }
}); //ESBOÇO

module.exports = mongoose.model('Link', linkSchema); //CRIANDO UMA COLEÇÃO E APLICANDO NOSSO ESBOÇO NA MESMA