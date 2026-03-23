const { adicionarTarefa, listarTarefas } = require("../database/tarefaDatabase")

function cadastrarTarefa(descricao) {
    if (!descricao){
        return false
    }
    
    adicionarTarefa.tarefas.push({ descricao })
    return true
}

function totalTarefas() {
    return listarTarefas().length
}

module.exports = { cadastrarTarefa, totalTarefas }