const calcularTaxa = require("../services/taxaService")

describe("Testar taxaService", () => {
    test("Aplicar 5% acima de 500", () => {
        expect(calcularTaxa(600)).toBe(630)
    })

    test("Não aplica taxa até 500", () => {
        expect(calcularTaxa(300)).toBe(300)
    })
})