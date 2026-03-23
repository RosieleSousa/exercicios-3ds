const { cadastrarTarefa, totalTarefas } = require("../services/tarefaService")
const { limparBanco } = require("../database/tarefaDatabase")

beforeEach(() => {
    limparBanco()
})

describe("Testando tarefaService", () => {
    test("Deve cadastrar uma tarefa", () => {
        const resultado = cadastrarTarefa("estudar para a prova")

         expect(resultado).toBe(true)
    })
})

describe("testando se o cadasto não está vazio", () => {
    test("Não deve cadastrar tarefa sem descrição", () => {
        const resultado = cadastrarTarefa('')

        expect(resultado).toBe(false)
    })

})

describe("testando se a contagem funciona", () => {
    test("Deve retornar o numero total de tarefas cadastradas", () => {
        cadastrarTarefa("Tarefa 1")
        cadastrarTarefa("Tarefa 2")

        const total = totalTarefas()
        expect(total).toBe(2)
    })
})