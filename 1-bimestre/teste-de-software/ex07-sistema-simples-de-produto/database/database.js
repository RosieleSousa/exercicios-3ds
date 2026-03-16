let produtos = []

function adicionarProduto(produto) {
    produtos.push(produto)
}

function limparBanco() {
    produtos = []
}

module.exports = {
    adicionarProduto,
    limparBanco
}