const validarPedido = require('../index.js')

test("pedido válido deve retornar true", () => {
    const pedidoValido = {
  cliente: "João",
  total: 100,
  itens: ["produto 1"]
}
    const pedido = validarPedido(pedidoValido)
    expect(pedido).toBe(true)
})

test("Pedido com o total de 0 deve retornar false", () => {
    const pedidoSemValor = {
  cliente: "João",
  total: 0,
  itens: ["produto 1"]
}
    const valor = validarPedido(pedidoSemValor)
    expect(valor).toBe(false)
})

test("Pedido sem cliente deve retornar false", () => {
    const pedidoSemCliente = {
  total: 100,
  itens: ["produto 1"]
}

  const resultado = validarPedido(pedidoSemCliente)
  expect(resultado).toBe(false)
})

test("Pedido sem itens deve retornar false", () => {
    const pedidoSemItens = {
  cliente: "João",
  total: 100,
  itens: []
}
    const itens = validarPedido(pedidoSemItens)
    expect(itens).toBe(false)
})