const { adicionarProduto, limparBanco } = require("../database/database")
const { cadastrarProduto } = require("../services/proodutoService")
beforeEach(() => {
    limparBanco()
})

test("Deve adicionar um produto", () => {
    adicionarProduto({ nome:"Melancia" })

    const Produtos = cadastrarProduto()

    expect(Produtos.length).toBe(1)
})

test("Banco deve começar vazio", () => {
    const produtos = listarProdutos()

    expect(produtos.length).toBe(0)
})

