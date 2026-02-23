const calcularQuadrado = require("../index")
test("a multiplicação de 5 x 5 deve ser 25", () => {
    expect(calcularQuadrado(5, 5)).toBe(25)
})
