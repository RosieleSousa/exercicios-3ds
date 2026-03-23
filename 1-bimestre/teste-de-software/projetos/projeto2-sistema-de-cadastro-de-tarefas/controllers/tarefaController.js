const service = require('../services/tarefaService');

function criar(req, res) {
  const { descricao } = req.body;

  const sucesso = service.cadastrarTarefa(descricao);

  if (!sucesso) {
    return res.status(400).json({ erro: 'Descrição obrigatória' });
  }

  return res.status(201).json({ mensagem: 'Tarefa cadastrada' });
}

module.exports = {
  criar
};