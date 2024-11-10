const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
    _id: String,
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String],
});

module.exports = mongoose.model('Livro', LivroSchema, 'livros');
