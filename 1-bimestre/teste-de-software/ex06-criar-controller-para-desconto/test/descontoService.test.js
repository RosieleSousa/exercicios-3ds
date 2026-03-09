const calcularDesconto = require("../services/descontoService")

describe("Testando descontoService", () => {
    test("Aplicar 10% acima de 100", () => {
        expect(calcularDesconto(200)).toBe(180)
    })

    test("Não aplicar desconto até 100", () => {
        expect(calcularDesconto(50)).toBe(50)
    })
})