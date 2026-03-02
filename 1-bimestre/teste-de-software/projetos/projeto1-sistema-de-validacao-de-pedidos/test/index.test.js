const validarPedido = require('../index.js')

test("Pedido válido deve retornar true", () => {
  const pedidoValido = {
  cliente: "Carlos",
  total: 150,
  itens: ["produto A",]
}
    const pedido = validarPedido(pedidoValido)
    expect(pedido).toBe(true)
})

test("Pedido com o total de 0 deve retornar false", () => {
  const pedidoSemValor = {
  cliente: "Carlos",
  total: 0,
  itens: ["produto A"]
}
    const valor = validarPedido(pedidoSemValor)
    expect(valor).toBe(false)
})

test("Pedido sem cliente deve retornar false", () => {
  const cliente = {
  total: 150,
  itens: ["produto A"]
}

  const resultado = validarPedido(cliente)
  expect(resultado).toBe(false)
})

test("Pedido sem itens deve retornar false", () => {
    const pedidos = {
  cliente: "Carlos",
  total: 150,
  itens: []
}
    const itens = validarPedido(pedidos)
    expect(itens).toBe(false)
})