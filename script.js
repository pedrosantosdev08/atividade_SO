function simular() {
  const qtd = parseInt(document.getElementById("qtdProcessos").value);
  const escalonamento = document.getElementById("escalonamento").value;
  const memoria = document.getElementById("memoria").value;

  // Verificação da quantidade de processos
  if (isNaN(qtd) || qtd <= 0) {
    alert("Digite uma quantidade válida de processos.");
    return;
  }

  // Criação de processos com valores aleatórios
  let processos = [];
  for (let i = 1; i <= qtd; i++) {
    processos.push({
      id: `P${i}`,
      tempo: Math.floor(Math.random() * 10) + 1, // tempo aleatório entre 1 e 10
      memoria: Math.floor(Math.random() * 100) + 1 // memória aleatória entre 1 e 100
    });
  }

  // Construção do resultado da simulação
  let output = `<h2>Resultado da Simulação</h2>`;
  output += `<p><strong>Escalonamento:</strong> ${escalonamento}</p>`;
  output += `<p><strong>Gerenciamento de Memória:</strong> ${memoria}</p>`;
  output += `<h3>Processos:</h3><ul>`;

  // Exibindo os processos gerados
  processos.forEach(p => {
    output += `<li>${p.id} - Tempo: ${p.tempo} - Memória: ${p.memoria}MB</li>`;
  });

  output += `</ul>`;
  document.getElementById("resultado").innerHTML = output;
}

// Adicionando evento de clique ao botão "Simular"
document.querySelector("button").addEventListener("click", simular);
