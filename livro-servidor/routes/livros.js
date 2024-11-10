const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
const router = express.Router();

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    const resultado = await incluir(req.body);
    res.json({ mensagem: "Inclusão efetuada" });
});

router.delete('/:id', async (req, res) => {
    const resultado = await excluir(req.params.id);
    res.json({ sucesso: resultado.deletedCount > 0 });
});

module.exports = router;
