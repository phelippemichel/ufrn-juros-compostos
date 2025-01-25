function calcularJurosCompostos(principal, taxa, tempo) {
  const jurosCompostos = principal * Math.pow(1 + taxa / 100, tempo) - principal;
  return jurosCompostos;
}

export default calcularJurosCompostos;