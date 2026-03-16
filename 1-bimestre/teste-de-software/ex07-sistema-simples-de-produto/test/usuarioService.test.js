const { cadastrarProduto, totalProdutos } = require("../services/ProdutoService")
const { limparBanco } = require("../database/database")

beforeEach(() => {
    limparBanco()
})

describe("Testando ProdutoService", () => {
    test("Deve cadastrar um produto", () => {
        cadastrarProduto("Melancia")

        expect(totalProdutos)().toBe(1)
    })

    test("Não deve cadastrar usuário sem nome", () => {
        const resultado = cadastrarProduto()

        expect(resultado).toBe(false)
    })
})