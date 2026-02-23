 test('5 é maior que 3', () => {
    expect(5).toBeGreaterThan(3)
  })

  test('"Teste de Software" contém "Software"', () => {
    expect("Teste de Software").toContain("Software")
  })

  test('Objeto { aprovado: true } é igual ao esperado', () => {
    const resultado = { aprovado: true }
    expect(resultado).toEqual({ aprovado: true })
  });