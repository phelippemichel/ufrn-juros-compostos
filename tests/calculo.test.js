import calcularJurosCompostos from '../src/calculo';

describe('calcularJurosCompostos', () => {
  it('deve calcular juros compostos corretamente', () => {
    const principal = 1000;
    const taxa = 0.05;
    const tempo = 5;

    const juros = calcularJurosCompostos(principal, taxa, tempo);
    expect(juros).toBeGreaterThan(0);
  });
});