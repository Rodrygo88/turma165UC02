function questao01() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let cidade = document.getElementById("cidade").value;

  let resposta = document.getElementById("resposta01");

  resposta.textContent = `Seu nome é ${nome}, tem ${idade} e mora em ${cidade}.`;
}

function questao02() {
  let valor = document.getElementById("valor").value;
  let desconto = 0.2;
  let valor_final = valor - valor * desconto;

  let resposta = document.getElementById("resposta02");

  resposta.textContent = `Preço total do produto é R$${valor}, com 20% de desconto fica por R$${valor_final}.`;
}

function questao03() {
  let celsius = document.getElementById("temperatura").value;
  let convertido = (celsius * 9) / 5 + 32;

  let resposta = document.getElementById("resposta03");

  resposta.textContent = `A temperatura de ${celsius}°C convertida fica de ${convertido}°F.`;
}

function questao04() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);

  let perimetro = base + base + altura + altura;
  let area = base * altura;

  let resposta = document.getElementById("resposta04");

  resposta.textContent = `O perimetro é de ${perimetro} e a área ${area}`;
}

function questao05() {
  let ano_nascimento = Number(document.getElementById("ano_nascimento").value);
  let ano_atual = Number(2025);
  let idade = ano_atual - ano_nascimento;

  let resposta = document.getElementById("resposta05");

  resposta.textContent = `Você nasceu em ${ano_nascimento} e tem ${idade} anos de idade.`;
}

function questao06() {
  let idade = Number(document.getElementById("idade_atual").value);
  let ano_atual = Number(2025);
  let ano_nascimento = ano_atual - idade;

  let resposta = document.getElementById("resposta06");

  resposta.textContent = `Você tem ${idade} anos e nasceu em ${ano_nascimento}.`;
}
