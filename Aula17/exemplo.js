function questao01(){
    let nome = prompt("Nome: ");
    let idade = prompt("Idade: ");
    let cidade = prompt("Cidade: ");

    alert(`Seu nome é ${nome}, tem ${idade} e mora em ${cidade}.`);    
}

function questao02(){
    let valor = prompt("Valor do produto: R$ ");
    let desconto = 0.20
    let valor_final = valor-(valor*desconto);

    alert(`Preço total do produto é R$${valor}, com 20% de desconto fica de R$${valor_final}.`);  
}

function questao03(){
    let celsius = prompt("Temperatura em Celsius: ");
    let convertido = (celsius * 9/5) + 32;


    alert(`A temperatura de ${celsius}°C convertida fica de ${convertido}°F.`);  
};



function questao04(){
    let base = Number(prompt("Base: "));
    let altura = Number(prompt("Altura: "));

    let perimetro = base+base+altura+altura;
    let area = base*altura;

    alert(`O perimetro é de ${perimetro} e a área ${area}`);  
};

function questao05(){
    let ano_nascimento = Number(prompt("Ano de Nascimento: "));
    let ano_atual = Number(2025);
    let idade = ano_atual - ano_nascimento;

    alert(`Você nasceu em ${ano_nascimento} e tem ${idade} anos de idade.`);  
}
