
/*
 EXNOVA ROBO V17.9
 MODULO DE TESTE DE VELAS
 M1 E M5 - SOMENTE LEITURA
*/

// Gera velas simuladas para testar o painel.
function gerarVelasTeste(precoInicial, quantidade, variacao) {
  const velas = [];
  let preco = precoInicial;

  for (let i = 0; i < quantidade; i++) {
    const abertura = preco;
    const fechamento = abertura + variacao;

    const maxima = Math.max(abertura, fechamento) + 0.00010;
    const minima = Math.min(abertura, fechamento) - 0.00010;

    velas.push({
      open: Number(abertura.toFixed(6)),
      high: Number(maxima.toFixed(6)),
      low: Number(minima.toFixed(6)),
      close: Number(fechamento.toFixed(6))
    });

    preco = fechamento;
  }

  return velas;
}

// Dados simulados M1 e M5.
function executarTeste() {
  return {
    ativo: "EUR/USD OTC",
    origem: "SIMULACAO",
    m1: gerarVelasTeste(1.100000, 30, 0.000020),
    m5: gerarVelasTeste(1.100000, 30, 0.000050)
  };
}

// Disponibiliza o teste para o painel.
window.ExnovaTeste = {
  executarTeste
};
