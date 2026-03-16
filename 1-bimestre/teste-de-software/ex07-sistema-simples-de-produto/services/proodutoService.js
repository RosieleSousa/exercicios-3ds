const { adicionarProduto } = require("../database/database")

function cadastrarProduto(nome) {
    if (!nome) {
        return false
    }

    const Produto = { nome }

    adicionarProduto(Produto)

    return true
}


module.exports = { cadastrarProduto }